import React from "react";
import './ArtistSearchForm.css'

export default function ArtistSearchForm({ handleArtistSearch, handleArtistChange }) {
  return (
    <div>
      <form id="artist-search-form">
        <input type='text' name='search' placeholder="Search for an artist (e.g. 'Rihanna')" id="artist-input" onChange={handleArtistChange} />
        <button type='submit' id="artist-search-button" onClick={handleArtistSearch}>Submit</button>
      </form>
    </div>
  )
}

