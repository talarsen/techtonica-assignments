// Made a div
const div = document.createElement("div");

// added class Flower to it
div.classList.add("Flower");

// appended this div to body of html
document.body.appendChild(div);

// made an unordered list with any three items
const myList = `
<ul>
    <li>Rose</li>
    <li>Sunflower</li>
    <li>Lily</li>
</ul>    
`;

// Added Mylist to class Flower using innerHTML property
div.innerHTML = myList;

// Created an image and added class & attributes[src, width, height, alt]
const img = document.createElement("img");
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Carabao_mangoes_%28Philippines%29.jpg";
img.height = 250;
img.width = 250;
img.classList.add("fruit");
img.alt = "mango";
div.appendChild(img);

// A little animation [on doubleclicking on image it toggles]
function toggleIt() {
  img.classList.toggle("round");
}

img.addEventListener("dblclick", toggleIt);

// Using the JavaScript documentation or other resources as your guide, add another div with class having an image, a paragraph describing the image and a button through javaScript.

// Made a div
const div2 = document.createElement("div");

// added class horse to it
div2.classList.add("horse");


// appended this div to body of html
document.body.appendChild(div2);

// Created an horse image and added class & attributes[src, width, height, alt]
const horseImage = document.createElement("img");
horseImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/THIEL_619.jpg/220px-THIEL_619.jpg";
horseImage.height = 250;
horseImage.width = 250;
horseImage.style.display = "block"
horseImage.classList.add("horse");
horseImage.alt = "Appaloosa horse";

div.appendChild(horseImage);

// made paragraph describing the image
const horseParagraph = `The Appaloosa is an American horse breed best known for its colorful spotted coat pattern. In North America, the Nez Perce people of what today is the United States Pacific Northwest developed the original American breed.`

// Added Mylist to class Flower using innerHTML property
div2.textContent = horseParagraph;

// A little animation [on doubleclicking on image it toggles]
function toggleHorseImage() {
  horseImage.classList.toggle("round");
}

horseImage.addEventListener("dblclick", toggleHorseImage);

/***Check for Understanding
Where in an HTML document do you link external JavaScript file and Why?
//Answer: The problem caused by scripts is that they block parallel downloads. The HTTP/1.1 specification suggests that browsers download no more than two components in parallel per hostname. If you serve your images from multiple hostnames, you can get more than two downloads to occur in parallel. While a script is downloading, however, the browser won't start any other downloads, even on different hostnames.

In some situations it's not easy to move scripts to the bottom. If, for example, the script uses document.write to insert part of the page's content, it can't be moved lower in the page. There might also be scoping issues. In many cases, there are ways to workaround these situations.

An alternative suggestion that often comes up is to use deferred scripts. The DEFER attribute indicates that the script does not contain document.write, and is a clue to browsers that they can continue rendering. Unfortunately, Firefox doesn't support the DEFER attribute. In Internet Explorer, the script may be deferred, but not as much as desired. If a script can be deferred, it can also be moved to the bottom of the page. That will make your web pages load faster.

What is DOM?
//Answer: The Document Object Model.
-it is not your source HTML
-it is a node tree of valid HTML
The browser parses the document and creates the DOM and renders the page. 


Name at least 5 methods for making changes to the DOM you used or saw today.
//Answer: 
getElementById()	Selects an individual element within a document using a specific id
querySelector()	Uses CSS selector to select the first matching element within a document
getElementsByClassName()	Allows you to select all elements with a given class attribute
getElementsByTagName()	Locates all elements that match a given tag name
querySelectorAll()	Uses CSS selector to select one or more elements

Where would you look to find more JavaScript DOM methods?
MDN
The javascript console in the browser window

What are different ways of traversing the DOM?
The process of selecting another element based on its relationship to a previously selected element.

parentNode	Locates the parent element of an initial selection
previousSibling	Finds the previous sibling of a selected element
nextSibling	Finds the next sibling of a selected element
firstChild	Finds the first child of a selected element

//syntax for traversing
document.querySelector('li').parentNode
*/