import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "./NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import ArtistSearchForm from "../../components/ArtistSearchForm/ArtistSearchForm";
import { showLyrics, showLyricsId,getSongArray } from "../../utilities/lyrics-api";
import GuessInputForm from "../../components/GuessInputForm/GuessInputForm";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import { updateScore } from "../../utilities/users-api";
import mainlogo from "../../page-images/ai-tunes.png";


const textKey = process.env.VOICE_API_KEY


export default function App() {
  //ALLLLLLLL THE STATE
  const [user, setUser] = useState(getUser());
  const [artistSearch, setArtistSearch] = useState("");
  const [lyrics, setLyrics] = useState(false);
  const [audioLyrics, setAudioLyrics] = useState("");
  const [guess, setGuess] = useState("");
  const [guessId, setGuessId] = useState("");
  const [songArray, setSongArray] = useState([])
  const [userScore, setUserScore] = useState(0)

  function handleArtistChange(event) {
    const formData = event.target.value;
    setArtistSearch(formData);
  }

  async function handleArtistSearch(event) {
    event.preventDefault();
    const randomLyrics = await showLyrics(artistSearch);
    // const lyrcisId = await showLyricsId(guess)
    const songArray = await getSongArray()
    setSongArray(songArray)
    console.log(songArray)
    setLyrics(randomLyrics.lyrics.lyrics_id)
    setAudioLyrics(randomLyrics.lyrics.lyrics_body)
    // console.log(`songLyrics: ${lyrics}`)
    // console.log(`randomLyrics: ${randomLyrics}`)
    console.log(`audioLyrics: ${audioLyrics}`)
 
  }

  function handleGuessInput(event) {
    const guessFormData = event.target.value;
    setGuess(guessFormData);
  }

  async function handleUserGuessSubmit(event) {
    event.preventDefault();
    const guessedSongId = await showLyricsId(artistSearch, guess);
    // setGuessId(guessedSongId.lyrics.lyrics_id)
    // checkGuess function goes here
    checkGuess(lyrics, guessedSongId.lyrics.lyrics_id);
    console.log("GAME LOGIC GOES HERE");
  }



  async function checkGuess(userGuess, currentSong){
  //  let userGuess = guess
  //  let currentSong = lyrics
  console.log(`User's guess:${userGuess} and Current Song:${currentSong}`)
   if(!(userGuess === currentSong)){
    // updateScore(user)
    alert('yyou lose baddie')
    setArtistSearch('')
    setGuess('')
    setLyrics(false)
    setSongArray([])
   } else {
    setUserScore(userScore++)
    alert('you win or whatever')
    setArtistSearch('')
    setGuess('')
    setLyrics(false)
    // updateScore(user)
    
   }

  }

  /////////////////////////// AUDIO PLAYBACK FUNCTIONALITY //////////////////////////////
  // Getting Text-To-Speech functionality from Rapid API

const encodedParams = new URLSearchParams();
encodedParams.append("src", audioLyrics);
encodedParams.append("hl", "en-us");
encodedParams.append("r", "1");
encodedParams.append("c", "mp3");
encodedParams.append("f", "8khz_8bit_mono");
encodedParams.append("v", "Amy");

// Setting up fetch request options for text-to-speech
const options = {
	method: 'POST',
  params: {api: textKey},
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '7a6e949fdbmsh4fba1bb53c498bdp1fa899jsn4d7f16681c0f',
		'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
	},
	body: encodedParams
}

const ctx = new AudioContext()

let audio
let playSound

// Getting audio data from API response
const getAudio = () => {
    fetch(`https://voicerss-text-to-speech.p.rapidapi.com?key=c58ef2ff1bde4fa29a6a0d74cc472527`, options)
    .then((data) => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
        audio = decodedAudio
    })
}
getAudio()

// Playing audio response
function playSong(){

    playSound = ctx.createBufferSource()
    playSound.buffer = audio
    playSound.connect((ctx.destination))
    playSound.start(ctx.currentTime)
}

function stopSong(){
  playSound.stop(ctx.currentTime)
}
/////////////////////////// AUDIO PLAYBACK FUNCTIONALITY //////////////////////////////


  return (
    <>
    <main className="App">

      { user ? (
        <>
         <img
            src={mainlogo}
            alt={"main app logo in bright pink"}
            id="main-page-logo"
         />
          <NavBar setUser={setUser} user={user}/>
          <div id="main-page-forms">

          <ArtistSearchForm 
            handleArtistChange={handleArtistChange}
            handleArtistSearch={handleArtistSearch}
            artistSearch={artistSearch}
            setArtistSearch={setArtistSearch}
          />

          {lyrics && (
          <GuessInputForm

             SongArray = {songArray}
             handleGuessInput={handleGuessInput}
             handleUserGuessSubmit={handleUserGuessSubmit}
             setLyrics={setLyrics}
             playSong={playSong}
             stopSong={stopSong}

             score={ScoreCard} />)}
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </> 

       ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>

    </>
  );
}
