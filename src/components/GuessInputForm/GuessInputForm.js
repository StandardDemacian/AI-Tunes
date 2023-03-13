import './GuessInputForm.css'
import ScoreCard from '../ScoreCard/ScoreCard'

export default function GuessInputForm({ handleGuessInput, handleUserGuessSubmit, playSong, stopSong, SongArray, score }){
    return(
    <>
    <ScoreCard score={score} />
     <form>
        <button type='button' id="play-song-button" onClick={playSong}>Play Song</button>
        <button type='button' id="play-song-button" onClick={stopSong}>Stop Song</button>
        <select name ='DropDown' id='song-drop-down' onChange={handleGuessInput} >
          <option value={SongArray[0]}>{SongArray[0]}</option>
          <option value={SongArray[1]}>{SongArray[1]}</option>
          <option value={SongArray[2]}>{SongArray[2]}</option>
          <option value={SongArray[3]}>{SongArray[3]}</option>
          <option value={SongArray[4]}>{SongArray[4]}</option>
          <option value={SongArray[5]}>{SongArray[5]}</option>
          <option value={SongArray[6]}>{SongArray[6]}</option>
          <option value={SongArray[7]}>{SongArray[7]}</option>
          <option value={SongArray[8]}>{SongArray[8]}</option>
          <option value={SongArray[9]}>{SongArray[9]}</option>
        </select>
        {/* <input placeholder="Guess the song" type='text' name='guess' id="song-guess-input" onChange={handleGuessInput} /> */}
        <button type='submit' id="guess-song-button" onClick={handleUserGuessSubmit}>Submit</button>
      </form>
    </>
    )
}