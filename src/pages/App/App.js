import React from 'react';
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import AuthPage from "../AuthPage/AuthPage"
import MainPage from "../MainPage/MainPage"
import './App.css';

import { getUser } from "../../utilities/users-service"

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">

      {
        user ?
        <>
        <Routes >
            <Route path="/" element={<MainPage />} />
          </Routes> 
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}