import React from "react";
import { useState } from 'react'
import { showLyrics } from "../../utilities/lyrics-api";
// import GetLyrics from '../LyricsText/LyricsText'

export default function SearchBar({ setRes }) {
  const [search, setSearch] = useState('')

  function handleChange(event) {
    const formData = event.target.value
    setSearch(formData)
    console.log(formData)
  }

  console.log('for funsies')


  async function handleSearch(event) {
    event.preventDefault()
    // const res = await getLyrics(search)
    // const json = await res
    // const slicedJson = json
    // console.log('work')
    // console.log(slicedJson)
    // setRes(slicedJson)
    showLyrics(event.target)
  }

  return (
    <div>
      <form>
        <label>Search: </label>
        <input type='text' name='search' onChange={handleChange} />
        <button type='submit' onClick={handleSearch}>Submit</button>
      </form>
    </div>
  )
}