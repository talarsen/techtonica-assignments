// Mention different operators that can be used in JavaScript.
//comparison operators <, <= >= 
//boolean values true/false
//conditional if/else 
//logical && || !

// Write down the syntax of else if statement.

// if(condition) {
//   excute this if statement is true;
// } else if(condition) {
//   execute this
// }
  
// In JavaScript which operator has the highest precedence?
//logical ! has the highest precedence followed by <, <=, >= or >
//assignment operators right to left

// What is the difference between = and == operator?
//= is an assignment whereas == is a comparison

// How do you declare a Boolean in JavaScript?
//true or false no quotes





// Priya will attend only if Ming goes. 
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going

//if Ming is not going then take Priya out of array
//if David is not in the array then add David
//if David is in the array then add Alex 
//if David is not in array then remove Alex(consolidate line 9 and 10)
//if David is in array then remove Ming 
//if Priya is in array add Ming
// if 2 of the above names are in the array add Breanna

// Write a function called movieNight that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. And the array should include all the combinaton of three names out of five(total 10 possible array input). Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.


//function called movieNight that takes in an array

//array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies
movieGoers = ["D", "A", "B"]

let movieNight = (array) => {
  //convert array items to lower case to include edge case of lower case
  let lowerCaseArray = array.map(arrayItem => arrayItem.toLowerCase())
  
  //declare new array to hold attendees
 let  movieNightAttendees = []

  //Ming will not attend if David is going, Alex will attend if David is going and Breanna will attend if 2 others are going
  if((lowerCaseArray.includes("p")) && (lowerCaseArray.includes("d")) && (lowerCaseArray.includes("a"))) {
    movieNightAttendees.push("D", "A", "B")
    console.log(`Expect DAB`, movieNightAttendees)
  } 
  //Ming will NOT attend if David is going, Alex will attend if David is going and Breanna will attend if 2 others are going
  if((lowerCaseArray.includes("p")) && (lowerCaseArray.includes("d")) && (lowerCaseArray.includes("m"))){
    movieNightAttendees.push(`Expect DAB #2`, "D", "A", "B")
    console.log(`Expect DAB #2`, movieNightAttendees)
  }
  //Ming will NOT attend if David is going, Alex will attend if David is going and Breanna will attend if 2 others are going
  if((lowerCaseArray.includes("p")) && (lowerCaseArray.includes("b")) && (lowerCaseArray.includes("a"))){
    movieNightAttendees.push(`Expect PMB`, "P", "M", "B")
    console.log(movieNightAttendees)
  }

  //returns an array of the people who will attend the movie
  return movieNightAttendees;
}

movieNight(["P", "B", "A"]);



// ['P', 'D', 'A'] = ['D', 'A', 'B']
// ['P', 'D', 'M'] = ['D', 'A', 'B']
// ['P', 'B', 'A'] = ['P', 'M', 'B']
// ['P', 'B', 'M'] = ['P', 'M', 'B']
// ['B', 'A', 'M'] = ['P', 'M', 'B']
// ['D', 'B', 'A'] = ['D', 'A', 'B']
// ['D', 'A', 'M'] = ['D', 'A', 'B']
// ['A', 'M', 'P'] = ['P', 'M', 'B']
// ['D', 'B', 'M'] = ['D', 'A', 'B']
// ['P', 'D', 'B'] = ['D', 'A', 'B']