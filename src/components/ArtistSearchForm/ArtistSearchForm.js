import React from "react";

export default function ArtistSearchForm({ handleArtistSearch, handleArtistChange }) {
  return (
    <div>
      <form>
        <label>Search: </label>
        <input type='text' name='search' onChange={handleArtistChange} />
        <button type='submit' onClick={handleArtistSearch}>Submit</button>
      </form>
    </div>
  )
}

