export default function GuessInputForm({ handleGuessInput, handleUserGuessSubmit, playSong }){
    return(
    <>
     <form>
        <label>Search: </label>
        <input placeholder="Type Your Guess" type='text' name='guess' onChange={handleGuessInput} />
        <button type='submit' onClick={handleUserGuessSubmit}>Submit</button>
        <button type='button' onClick={playSong}>Play Song</button>
      </form>
    </>
    )
}