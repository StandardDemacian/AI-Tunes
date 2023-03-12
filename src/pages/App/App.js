import React from "react";
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "./NavBar";
import { getUser } from "../../utilities/users-service"
import HomePage from "../HomePage/HomePage";

export default function App() {
  const [user, setUser] = useState(getUser())
 

  return (
    <>
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
    </>
  );
}
