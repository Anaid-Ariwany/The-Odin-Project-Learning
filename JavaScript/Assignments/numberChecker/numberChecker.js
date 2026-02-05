function numberChecker(number) {
    if (number >= 10) {
        return true;
    } else {
        return false;
    }
}

// call the function with a number as an argument to test it
/* console.log("6:", numberChecker(6)); // should return false
console.log("9:", numberChecker(9)); // should return false
console.log("10:", numberChecker(10)); // should return true
console.log("50:", numberChecker(1000)); // should return true
 */

// Do not edit below this line
module.exports = numberChecker;