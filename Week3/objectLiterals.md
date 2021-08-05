Write down the syntax for declaring an Object.
An object is one or more key value pairs. Keys are also known as properties.
let object = {
  property: value,
  property:value
}
What do you mean by Complex Objects? Give an example.
Complex objects occur when:
An object contains more than one data type.
When a variable contains more than one object.

Explain some built-in Object Methods in JavaScript.
Answer: The Object.create() method is used to create a new object and link it to the prototype of an existing object.
Object.values() creates an array containing the values of an object.
Object.keys can be used to iterate through the keys and values of an object.

What is a property of an Object?
Answer:a property is an association between a name (or key) and a value.

Differentiate between dot and bracket notation.
Use “bracket notation” [ ] when you know which properties you want, and you want to loop through a list of property names
Use the “dot” ( . ) operator when you know which property you want, and can call it by name. 

How do you access nested object inside an array?
Indexing into an array of objects:
Each element of the list is an object.
Must index into the list to access the objects.
Then, use property names to access the object’s attributes.
myFaveMusic[0][“songs”][“Forest”];


Difference between object and array.
Arrays are ordered colletions, objects are not ordered