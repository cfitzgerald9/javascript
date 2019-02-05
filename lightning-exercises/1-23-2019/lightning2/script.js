// ## Lightning Exercise Two
// 1. Create a JavaScript file and link it to your `index.html` file.
// 2. Use `document.querySelector` to get a reference to the element with an id of "main-header"
// 3. Log the reference to the console
// 4. Add a class of "blue-text" to the element

const mainhead=document.querySelector("#main-header");
console.log(mainhead);
mainhead.classList.add("blue-text");

// ## Lightning Exercise Three
// 1. In your JavaScript file, use `document.querySelectorAll` to select all of the elements in your HTML file with a class of "body-text"
const bootytext = document.querySelectorAll(".body-text");
// 1. Log the reference to the console
console.log(bootytext);
// 1. Loop through the NodeList of elements and set the `.innerHTML` property of each element to "Hello, world!"
for(let i = 0; i < bootytext.length; i++){
    console.log(bootytext[i])
    bootytext[i].innerHTML="Hewwo, world"
}