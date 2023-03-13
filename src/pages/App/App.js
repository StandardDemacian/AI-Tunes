import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "./NavBar";
import { getUser } from "../../utilities/users-service"
import HomePage from "../HomePage/HomePage";
import ArtistSearchForm from "../../components/ArtistSearchForm/ArtistSearchForm";
import { showLyrics,showLyricsId } from "../../utilities/lyrics-api";
import GuessInputForm from "../../components/GuessInputForm/GuessInputForm";
import { updateScore } from "../../utilities/users-api";


function App() {
  const [user, setUser] = useState(getUser())
  const [artistSearch, setArtistSearch] = useState('')
  const [lyrics, setLyrics] = useState(false)
  const [guess, setGuess] = useState('')
  const [guessId, setGuessId] = useState('')

  function handleArtistChange(event) {
    const formData = event.target.value
    setArtistSearch(formData)
  }

  async function handleArtistSearch(event) {
    event.preventDefault()
    const randomLyrics = await showLyrics(artistSearch)
    // const lyrcisId = await showLyricsId(guess)
    setLyrics(randomLyrics.lyrics.lyrics_id)
    // console.log(lyrcisId)
    console.log(randomLyrics.lyrics.lyrics_id)
  }

  function handleGuessInput(event){
    const guessFormData = event.target.value
    setGuess(guessFormData)
  }

  async function handleUserGuessSubmit(event) {
    event.preventDefault()
    const guessedSongId = await showLyricsId(artistSearch,guess)
    // setGuessId(guessedSongId.lyrics.lyrics_id)
    // checkGuess function goes here
    checkGuess(lyrics,guessedSongId.lyrics.lyrics_id)
    console.log('GAME LOGIC GOES HERE')
  
  }


  async function checkGuess(userGuess, currentSong){
  //  let userGuess = guess
  //  let currentSong = lyrics
  console.log(`User's guess:${userGuess} and Current Song:${currentSong}`)
   if(!(userGuess === currentSong)){
    console.log('yyou lose baddie')
    setGuess('')
    setLyrics(false)
   } else {
    console.log('you win or whatever')
    updateScore(user)
   }
  }


  return (
    <main className="App">
      { user ?
        <>
          <NavBar setUser={setUser} user={user}/>
          <ArtistSearchForm 
            handleArtistChange={handleArtistChange}
            handleArtistSearch={handleArtistSearch}
            artistSearch={artistSearch}
            setArtistSearch={setArtistSearch}
          />
          {lyrics && <GuessInputForm
             handleGuessInput={handleGuessInput}
             handleUserGuessSubmit={handleUserGuessSubmit}
             setLyrics={setLyrics} />}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;