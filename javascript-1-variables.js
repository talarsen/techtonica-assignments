let calculate = (num, operator,num2 ) => {
  let mathAnswer;
  if(operator == "+"){
    return num + num2
  } 
  if(operator === "-") {
    return num - num2
  }
  if(operator === "*"){
    return num * num2
  }
  if((operator === "/") && (num2 === 0)){
    //console.log(`Can't divide by 0 `) 
    return `Can't divide by 0 `
  }
  if(operator === "/"){
    return num / num2
  }
  if(operator === "**") {
    return num ** num2
  }
  
}

console.log(calculate(10, "-", 5))
console.log(calculate(10, "+", 5))
console.log(calculate(10, "*", 5))
console.log(calculate(10, "/", 5))
console.log(calculate(10, "/", 0))
console.log(calculate(2, "**", 3))//challenge
console.log(Math.round(4.9)) //challenge

// Check for Understanding


// What are some rules for declaring variables in JavaScript?
    //capitalization matters
    // variable names cannot contain spaces
    //variables must begin with a letter and underscore or $
    // do not use reserved words


// What are some math operations that can be performed on number variables in JavaScript?
  // Addition (+)
    // Subtraction (-)
    // Division (/)
    // Remainder (%)
    // Multiplication (*)
    // Exponentiation (**)
    // Increment (++)
    // Decrement (--)
    // Unary negation (-)
    // Unary plus (+) 


// How do you define and call a function in JavaScript?
    // use the const or let keywords
    // let functionName = () => {

    //}

// How do you find the length of a string?

    //string.length

// What is the first index of a string?
  // 0