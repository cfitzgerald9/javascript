// console.log("javascript works");

// var myName = "Dwayne";
// console.log(myName);

// var myAge = "45";
// console.log(myAge);

var sum = 2 + 2 + 2;
console.log(sum, "this should be 6")

var likesPizza = true;
console.log("does Dwayne like pizza?", likesPizza)

likesPizza= false;

let myAge = 47;
myAge = "cheese";
console.log(myAge)
// this will work because let can change values

const name = "Dwayne";
// name = "Jerry"; (won't work now)

// 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)
// 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you have
// 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)

var myName = "Connor"
let numberOfPets = 3
const socialSecurity = 4206969
const bio = `${myName} has ${numberOfPets} cats and his SSN is ${socialSecurity}`;
console.log(bio)

// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.
// 2. Loop through your `petNames` array and log each pet's name to the console.

const petNames = ["Izzy", "Oscar", "Fuzzy"];

for (let i = 0; i < petNames.length; i++) {
    console.log(petNames[i]);
}

// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.

const favFoods = ["pasta", "jerky", "popsicles", "pho"]
// 2. Loop through the array and log each food to the console
for (let i= 0; i < favFoods.length; i++){
    console.log(favFoods[i]);
    if(favFoods[i] === "noodles" || favFoods[i] === "pasta" || favFoods[i] ==="Noodles"){
        console.log("Heck yeah!! Noodles!")
    }
}
// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.

// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp


// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// object

const mustang = {
    miles: 50000,
    color: "red",
    year: 2015,
}

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// array

const shelterName= ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const dad = {
    age: 46,
    hasJob: false,
    likesTV: false,
}

const daughter = {
    age:6,
    hasJob: false,
    likesTV: true,
}

const son = {
    age:16,
    hasJob: true,
    likesTV: false,
}

const mom = {
    age:47,
    hasJob: true,
    likesTV: true,
}

const familyMembers = [mom, son, daughter, dad]

console.log(familyMembers[3])

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// ```
console.log("START WARDROBE")
 const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)

console.log("START EMPIRE")

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.
const empAddress = "address"
const empDate = "constructionDate"
const empOwner = "owner"
const empArch = "architect"
const empCost = "cost"
console.log("START EMPIRE PART 2")
console.log(empireStateBuilding[empAddress]);
console.log(empireStateBuilding[empArch]);
console.log(empireStateBuilding[empOwner]);
console.log(empireStateBuilding[empCost]);
console.log(empireStateBuilding[empDate]);


const newForce = {
    founded: 2018,
    instructors: {
        fullTime: ["Jordan", "Josh", "Kim"],
    },
    careerAdvisors: ["Natalie", "Kinsey"],
    address: "1000 5th Ave, Huntington, WV 25701"
}



// Lightning Exercise 1: Output the names of the instructors to the console.

const teachers = newForce.instructors.fullTime
for (let i = 0; i < teachers.length; i++){
    console.log(teachers[i])
}
// Lightning Exercise 2: Output the names of the career advisors to the console.

const advisors = newForce.careerAdvisors

for (let i = 0; i < advisors.length; i++){
    console.log(advisors[i])
}