// Make a web page that generates a secret random number and the user can guess the number until they get it right. For each guess, the game should display whether the answer is higher, lower, or correct.

// Extensions:

// Track how many wrong guesses the user has made so far and display that count
// Track what numbers the user has already guessed and display those
// Let the user choose the range of the secret number


//secret number generator
let secretNumber  = Math.floor(Math.random() * 20 + 1);

// /*****DOM manipulation for informing user of the results */
//     //create div to store result text
//     let resultsDiv = document.createElement("div");
//     //Set its unique ID.
//     resultsDiv.id = 'resultsContainer';
//     //append resultDiv to body
//     document.body.appendChild(resultsDiv)

//     //create text to tell user their results
//     let userResultText = document.createElement("p");

//     //create div to store secret number text
//     let revealSecretNumberDiv = document.createElement("div");
//     //Set its unique ID.
//     revealSecretNumberDiv.id = 'secretNumberContainer';
//     document.body.appendChild(revealSecretNumberDiv)

//     //create text to tell user the secret number
//     let secretNumberText = document.createElement("p");




/*********For each guess the game should display whether the answer is too high, too low or correct and reveal the secret answer */
let revealGuess = (userGuess) => {

  

    //user guess is considered a string until it gets converted by the Number()here
    userGuess = Number(userGuess);
  //if userGuess/userInput is NaN tell user to renter input
    if (isNaN(userGuess)){
      console.log(`Please enter a number, your guess was not a number`)
      userResultText.textContent = "Please re-enter a number, your guess was not a number "
      return resultsDiv.appendChild(userResultText)
      return 
  } else if(secretNumber === userGuess){
      console.log(secretNumber)
      userResultText.textContent = "Congratulations! You're guessed the secret number. You should buy a lottery ticket! "
      return resultsDiv.appendChild(userResultText)
  } else if(secretNumber < userGuess){
      console.log(secretNumber)
      userResultText.textContent = "Your guess was too high."
      return resultsDiv.appendChild(userResultText)
  } else if(secretNumber > userGuess) {
      console.log(secretNumber)
      userResultText.textContent = "Your guess was too low."
      return resultsDiv.appendChild(userResultText)
  } 
    // secretNumberText.textContent =`The secret number was ${secretNumber}`
    // revealSecretNumberDiv.appendChild(secretNumberText)
    // console.log(`The secret number was ${secretNumber}`)
}//end of revealGuess function




/********DOM manipulaiton for User prompt */
//create div that will hold the prompt and background
let backgroundDiv = document.createElement("div");
//Set its unique ID.
backgroundDiv.id = 'backgroundContainer';

//Create the element using the createElement method. containerDiv is block
let promptDiv = document.createElement("div");
//Set its unique ID.
promptDiv.id = 'promptContainer';

//Add your content to the promptDiv
promptDiv.innerHTML = "<h5>Please enter a number between 1 and 20 inclusive.</h5>";

//Finally, append the backgroundDiv to the HTML body
document.body.appendChild(backgroundDiv)
//Finally, append the promptDiv to the HTML body
document.body.appendChild(promptDiv);

//create box for prompt and append to DOM
let userInput = document.createElement("input");
userInput.setAttribute('type', 'text');
userInput.setAttribute("id", "userGuess")
promptDiv.appendChild(userInput);

//console.log(userInput);
//console.log(userInput.value)//expect 10

//add event listener to return key when userIput
userInput.addEventListener("keypress", function(event)  {
  if(event.key === "Enter"){
    //console.log(userInput.value)//expect 10
    revealGuess(userInput.value);//exchange paramenter from original function with element.value

    //pass in another function to keep track of keypresses
    userGuessTracker();
  }
});

//keep track of user guesses and tell the user the secret number after 5 guesses
let numOfKeypresses = 0
let userGuessTracker = () => {
  //need to setup a counter to count the number of keypress of enter
      numOfKeypresses++
      console.log(`A key was pressed and ${numOfKeypresses}`);
      if(numOfKeypresses === 5){
      secretNumberText.textContent =`The secret number was ${secretNumber} Thank you for playing.`
      revealSecretNumberDiv.appendChild(secretNumberText)
      console.log(`The secret number was ${secretNumber}`)
    }
}

/*****DOM manipulation for informing user of the results */
    //create div to store result text
    let resultsDiv = document.createElement("div");
    //Set its unique ID.
    resultsDiv.id = 'resultsContainer';
    //append resultDiv to body
    document.body.appendChild(resultsDiv)

    //create text to tell user their results
    let userResultText = document.createElement("p");

    //create div to store secret number text
    let revealSecretNumberDiv = document.createElement("div");
    //Set its unique ID.
    revealSecretNumberDiv.id = 'secretNumberContainer';
    document.body.appendChild(revealSecretNumberDiv)

    //create text to tell user the secret number
    let secretNumberText = document.createElement("p");




// /*****DOM manipulation for informing user of the results */
// //tell users their results
// let resultsDiv = document.createElement("div");
// //Set its unique ID.
// resultsDiv.id = 'resultsContainer';
// document.body.appendChild(resultsDiv)

// let userResultDiv = document.createElement("p");
// userResultDiv.textContent = " "
// resultsDiv.appendChild(userResultDiv)
