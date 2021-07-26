
// const li = document.getElementById("ingredient1")
// //console.log(li);
// li.style.color = "blue";



const toggleV2 = (e) => {
   const li = e.target;//what dom element is the event happening to
   li.classList.toggle("obtains")
   //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/
}


document.querySelectorAll(".ingredientList li").forEach(li => {
   li.addEventListener("click", toggleV2)
});





//grab each li and log it to the console

// const lis = document.getElementsByClassName("ingredients");

// for (let li of lis) {
//    return li.innerHTML
//    // console.log(li.innerHTML)
// }
// let crossOutIngredientList = function() {
//    for (let li of lis) {
//       return li.innerHTML
//      let finalLine=  lis.style.textDecoration = "line-through";
//       // console.log(li.innerHTML)
//    }  
//    return finalLine
// }
// crossOutIngredientList.addEventListener("mouseover", crossOutIngredientList)

    // 1. Find and store the element we want to listen to events on.
   let delishButton = document.getElementById("clicker");
    // 2. Define the function that will respond to the event.
    // callback 
    let onButtonClick = function() {
      delishButton.textContent = "Oh wow, you clicked me!";
    };
    // 3. Add the event listener for the element and function
    // anonymous "inline"
    delishButton.addEventListener("click", onButtonClick);

    let recipeLink = function() {
      let a = document.createElement('a');
      let linkText = document.createTextNode("Go to Delish.com");
      a.appendChild(linkText);
      a.title = "Delish.com";
      a.href = "https://delish.com";
      document.body.appendChild(a);
    };