// Write down the syntax of a switch statement in JavaScript.
// What will happen if break is not used in a switch statement?
//Answer: If there is no break statement the cases will keep evaluating
// What is the advantage of using a switch statement over an if/else statement?
//A switch case helps simplify the code and it is quicker to write if there are many conditions. 

// Using a switch statement, write a program to accept a lower case letter. Create an alert with the text 'This letter is a vowel' if the letter is a vowel.
let vowelFinder = (lowerCaseLetter) => {
  switch(lowerCaseLetter){
    case "a": case "e": case "o": case "i": case "u":
      return "This is a vowel";
      break;
    case "b": case "c":
      return`This is a consonant`
      break;
  }
}
console.log(vowelFinder("b"))