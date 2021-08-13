import React from "react"
import CSS from "../App.css"



function GuessesRemaining(props){

  const numToGo = 5 - props.numOfGuesses
  
  let showGuesses = () => {
    if(numToGo === 1){
      return `You have ${numToGo} guess left`
    } else if (numToGo > 1 && numToGo <= 5) {
    return `You have ${numToGo} guesses left`
    } else {
      return `You have no more guesses left. Thank you for playing`
    }

  } 

  return (
    
      <p className="guessesLeft">{showGuesses()}</p>
    
    
  )

}
//gather the number of guesses and at each guess(increment)(setGuesses) display the number of guesses left
//0 5 guesses remaining
//1 guess and 4 togo
//2 guesse and 3 togo

export default GuessesRemaining