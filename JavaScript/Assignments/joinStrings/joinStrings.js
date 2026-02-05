/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
//I decided to use let for the variables so that I can change them if I need to. You can use const if you want to, but you will have to change the values in the tests if you do.
let firstName = "Carlos";
let lastName = "Stevenson";
let thisYear = 1965;
let birthYear = 1947;

let greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

//Display the greeting in the console
/* console.log(greeting); */

//Step 3: Optimize:
let fullName = firstName + " " + lastName;
let age = thisYear - birthYear;

greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

//Display the greeting in the console
/* console.log(greeting); */

// Do not change this
module.exports = {
    firstName: typeof firstName === 'undefined' ? undefined : firstName,
    lastName: typeof lastName === 'undefined' ? undefined : lastName,
    thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
    birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
    greeting: typeof greeting === 'undefined' ? undefined : greeting,
    fullName: typeof fullName === 'undefined' ? undefined : fullName,
    age: typeof age === 'undefined' ? undefined : age
}