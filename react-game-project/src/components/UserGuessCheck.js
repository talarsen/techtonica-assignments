import React from "react"
import '../App.css';

import GuessesRemaining from "./components/GuessesRemaining.js"

// generate random number
let secretNumber = Math.floor(Math.random() * 20) + 1;

console.log(secretNumber)
let UserGuessCheck = (props) => {
    
    let userResults = Number(props.userResults)
    if (isNaN(userResults)){
      console.log(`Please enter a number, your guess was not a number`)
      return <p>"Please enter a number, your guess was not a number"</p>
    } 
    if(secretNumber === userResults){
      //console.log(secretNumber)
      return <p>"Congratulations! You're guessed the secret number. You should buy a lottery ticket! The secret number was ${secretNumber}!</p>
    } 
    if(secretNumber < userResults){
      //console.log(secretNumber)
      return <p>"Your guess was too high."</p>
    } 
    if(secretNumber > userResults) {
      //console.log(secretNumber)
      return <p>"Your guess was too low."</p> 
    }  
}

export default UserGuessCheck