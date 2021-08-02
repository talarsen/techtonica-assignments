// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.
//arr[0][1](first array, second item)
// let printVacations = (arr)  => {
 
//   for(let i = 0; i < arr.length; i++){
//     let personName = arr[i][0];
//     let destination = arr[i][1];
//     console.log(`${personName} really wants to go to ${destination}`)
//   }
// }

// console.log(printVacations([ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]))

/******Activity 2 ********/
// [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]
// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

// let printVacations = (arr)  => {
 
//     for(let i = 0; i < arr.length; i++){
//       let personName = arr[i][0];
//       let destination1 = arr[i][1][0];
//       let destination2 = arr[i][1][1];
    

//       console.log(`${personName} is willing to go to ${destination1}, or ${destination2}`)
//     }
      
    
// }

// printVacations([ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ])

// Check for Understanding
// Differentiate between for loop and while loop.
// Use a for loop to iterate over an array.
// Use a for loop when you know the loop should execute n times.
// Use a while loop for reading a file into a variable.
// Use a while loop when asking for user input.
// Use a while loop when the increment value is nonstandard.

// Write down the syntax of a Nested for loop in JavaScript.

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     const subArray = arr[i];
//     for (let j = 0; j < subArray.length; j++) {
//       product *= subArray[j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);
// Convert the given while loop to a for loop:
// let ourArray = [];
// let i = 0;
// while(i < 5) {
// ourArray.push(i);
// i++;
// }
// console.log([1,2,3,4,5])

// let printArray = (oldArray) => {
  
//   let newArray = [];
//   for(let i = 0; i < oldArray.length; i++ ) {
//     newArray.push(oldArray)
//     return newArray; 
//   }
  
// }
// console.log(printArray([1,2,3,4,5]))