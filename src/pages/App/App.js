import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "./NavBar";
import { getUser } from "../../utilities/users-service"
import HomePage from "../HomePage/HomePage";
import ArtistSearchForm from "../../components/ArtistSearchForm/ArtistSearchForm";
import { showLyrics } from "../../utilities/lyrics-api";
import GuessInputForm from "../../components/GuessInputForm/GuessInputForm";


function App() {
  const [user, setUser] = useState(getUser())
  const [artistSearch, setArtistSearch] = useState('')
  const [lyrics, setLyrics] = useState(false)
  const [guess, setGuess] = useState('')

  function handleArtistChange(event) {
    const formData = event.target.value
    setArtistSearch(formData)
  }

  async function handleArtistSearch(event) {
    event.preventDefault()
    const lyrics = await showLyrics(artistSearch)
    setLyrics(lyrics)
    console.log(lyrics)
  }

  function handleGuessInput(event){
    const guessFormData = event.target.value
    setGuess(guessFormData)
  }

  async function handleUserGuessSubmit(event) {
    event.preventDefault()
    // checkGuess function goes here
    console.log('GAME LOGIC GOES HERE')
  
  }


  async function checkGuess(userGuess, currentSong){
    // pull track name that goes along with current lyrics
    // if trackName === userInput
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