import './GuessInputForm.css'

export default function GuessInputForm({ handleGuessInput, handleUserGuessSubmit, playSong, stopSong }){
    return(
    <>
     <form>
        <button type='button' id="play-song-button" onClick={playSong}>Play Song</button>
        <button type='button' id="play-song-button" onClick={stopSong}>Stop Song</button>
        <input placeholder="Guess the song" type='text' name='guess' id="song-guess-input" onChange={handleGuessInput} />
        <button type='submit' id="guess-song-button" onClick={handleUserGuessSubmit}>Submit</button>
      </form>
    </>
    )
}