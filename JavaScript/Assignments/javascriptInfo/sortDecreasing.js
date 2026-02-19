/* 
# Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10 
*/

let arr = [5, 2, 1, -10, 8];

function compareNums(a, b) {
    return a - b;
}

arr.sort(compareNums);

console.log(arr);