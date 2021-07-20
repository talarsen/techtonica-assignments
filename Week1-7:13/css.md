Check for Understanding
If you can answer these questions, you can feel confident that you understand the lesson. If you are unsure about any of these, reach out to a peer.

What is the benefit of using CSS in HTML?

Answer: CSS provides for the appearance of websites. HTML provides for the structure of websites. 


Explain the difference between class and id in CSS.

Answer: .class and #id
The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.


Describe the different parts of the "Box" model.
Answer: 
the term "box model" is used when talking about design and layout.
The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 
Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

Explain use of inline and block value in display property.
Answer: 
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
Blocking elements include...
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>

An inline element does not start on a new line and only takes up as much width as necessary.
This is an inline <span> element inside a paragraph.
Examples of inline elements:

<span>
<a>
<img>

display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.
The <script> element uses display: none; as default. 


Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there.

visibility:hidden; also hides an element.

However, the element will still take up the same space as before. The element will be hidden, but still affect the layout.


Name a common mistake developers often make when using CSS.
#1 Using px when it is not needed...Do you know that you don’t need to use px when you want to set the a value to 0:

#2: Repeating the same code⁣  The number of code lines will cost you in terms of app performance and loading time.

#3: Not using shorthand properties⁣
Avoid multiline of code when you can do the same thing with one line:
