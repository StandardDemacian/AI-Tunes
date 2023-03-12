export default function GuessInputForm({ handleGuessInput, handleUserGuessSubmit }){
    return(
    <>
     <form>
        <label>Search: </label>
        <input placeholder="Type Your Guess" type='text' name='guess' onChange={handleGuessInput} />
        <button type='submit' onClick={handleUserGuessSubmit}>Submit</button>
      </form>
    </>
    )
}