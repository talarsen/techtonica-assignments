//grabbing the div that has the ingredient list and index 0 avoids HTMLCollection
const divs = document.getElementsByClassName("ingredientsList");
console.log(divs[0])//just gives one div

const lis = divs[0].getElementsByTagName("li");
  for (let li of lis) {
    console.log(li.innerHTML)
  }


// lis.addEventListener("click", );
// .text-decoration-line-through


const logoClick = document