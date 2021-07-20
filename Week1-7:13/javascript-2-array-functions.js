let printCuteAnimals = (animalArray) => {
  console.log(animalArray, animalArray.length);
  animalArray.pop();
  console.log(animalArray)
  let newAnimalArray = (["puppies", "kittens", "sheep"]);
  console.log(newAnimalArray);
  let finalArray = animalArray.concat(newAnimalArray);
  console.log(finalArray, finalArray.length)

}

printCuteAnimals(["rabbit", "bear", "moose"])


// Check for Understanding


// What do the methods push() and pop() do?

  //push() adds one or more elements to the end of an array and returns the new length of the array.
  //pop() deletes the last element at the end of the array. It mutatates the original array.


// How would you access the first and last item in an array?
    //arrrayName[0]= first item
    //arrayName[arrayName.length -1] = last item

// What does arrayName.length do?
    //it gives the amount of items in the array

// How would you index into the following array to get Cookie? let dessertArray = [ ["Pie", 4], ["Cupcake”, 5], ["Cookie", 12] ];
    //dessertArray[2][0] = "Cookie"

// What's the difference and similarities between var, let and const?

    //var is global scope when used outside of a function or local scope when used inside of a function and is not used anymore
    //let is block scope. let can be updated but not re-declared.

  //When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.
    //const is used when the variable shouldn't be changed it is also block scoped like let

// What's the difference between parameters and arguments? Show an example.
    //A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.

    //Function arguments are the real values passed to the function.

// What is the difference between local scope and global scope?
    //A variable exists inside or outside a block. If a variable is declared outside all functions or curly braces ({}), it exists in the global scope. The global variables can be accessed by any line of code in the program, including inside blocks.

    //In contrast to global variables, locally scoped ones are only visible within the function they are declared. Each function written in JavaScript creates a new local scope and every variable declared in this scope is a local variable. That means that variables with the same name can be used in different functions. However, any effort to reference a local variable outside its scope will result in a Reference Error:

    //We’ve seen variables defined with the var keyword. Var can declare a variable either in the global or local scope. The variables that are declared within the block scope are comparable to local ones. They are available within the block that they are defined.

    //The main difference between the local scope and block scope is that the block statements (e.g. if conditions or for loops), don't create a new scope. So the var keyword will not have an effect, because the variables are still in the same scope.

    //Why Scoping?

    // So, why having scopes and limit the visibility of variables? Firstly, security reasons. The variables are only accessible when they are needed. Secondly, the scope solves the namespace collisions problem, which happens when variables with the same name but with different scopes exist. Finally, It will save memory in your code because the block variables will stop to exist after the block finishes running.