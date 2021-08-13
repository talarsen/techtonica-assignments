import React,{useState} from "react"
import './App.css';
import GuessesRemaining from "./components/GuessesRemaining.js" 




function App() {



  const [inputValue, updateValue] = useState("");
  //const [results, setResults] = useState("");
  const [numOfGuesses, setGuesses] = useState(0)
  //*first is the current value state
  return (
    <div className="App">
      <h1 className="headerText">Welcome to Guess My Secret Number! Let's Play</h1>
      <h3 className="userDirections">Please enter a number between 1 and 20 inclusive</h3>
      <input 
        //type="number" 
        value={inputValue}
        onChange={e => updateValue(e.target.value)}
      />
      
  
      {numOfGuesses === 0 ? <p>{null}</p> :
       <UserGuessCheck userResults={inputValue} numOfGuesses={numOfGuesses} />}

      <button 
        className="guessButton"
        type="submit"
        onClick ={() => {setGuesses(numOfGuesses+1);console.log(`${inputValue} and ${numOfGuesses}`)}}>
        Guess</button>
      {/* Need to get incrementing guesses working. Start at 0 and after 5 guesses reveal the secret number */}

      <div className = "guessesRemaining">
      <GuessesRemaining numOfGuesses={numOfGuesses} />
      </div>
    </div>
  );
}

export default App;