/* 1. Write a function called add7 that takes one number and returns that number + 7.
    - add7(10) should return 17 */
function add7(number) {
    return number + 7;
}

console.log("add7:", add7(10));



/* 2. Write a function called multiply that takes 2 numbers and returns their product.
    - multiply(3, 2) should return 6 */
function multiply(num1, num2) {
    return num1 * num2;
}

console.log("multiply:", multiply(3, 2));


/* 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
    - capitalize("abcd") should return "Abcd"
    - capitalize("ABCD") should return "Abcd"
    - capitalize("aBcD") should return "Abcd" */
function capitalize(str) {
    let lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
}

console.log("capitalize:", capitalize("abcd"));
console.log("capitalize:", capitalize("ABCD"));
console.log("capitalize:", capitalize("aBcD"));



/* 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
    - lastLetter("abcd") should return "d" */
function lastLetter(str) {
    return str.charAt(str.length - 1);
}
console.log("lastLetter:", lastLetter("abcd"));