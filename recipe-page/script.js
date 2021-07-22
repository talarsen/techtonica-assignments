// //grabbing the div that has the ingredient list and index 0 avoids HTMLCollection
// const divs = document.getElementsByClassName("ingredientsList");
// console.log(divs)//just gives one div

// const lis = divs[0].getElementsByTagName("li");
//   for (let li of lis) {
//     console.log(li.innerHTML)
//   }


// // lis.addEventListener("click", );
// // .text-decoration-line-through

// const li = document.getElementById("ingredient1")
// console.log(li);
// li.style.color = "blue";

//grab each li and log it t the console
const lis = document.getElementsByClassName("ingredients");
for (let li of lis) {
   
   console.log(li.innerHTML)
}

lis.addEventListener("click", function () {
   li.style.textDecoration = "line-through" 
})

