import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "./NavBar";
import { getUser } from "../../utilities/users-service"
import HomePage from "../HomePage/HomePage";

function App() {
  const [user, setUser] = useState(getUser())
  const [error,seterror] = useState(null)
  const [isLoaded,setIsLoaded] = useState(false)
  const [lyrics, setLyrics] = useState([])

  // useEffect(() => {
  //   fetch('http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=48a555dd37f4da903d3831bd93e445bf&track_id=30117939')
  // })

  return (
    <main className="App">
      { user ?
        <>
          <NavBar setUser={setUser} user={user}/>
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