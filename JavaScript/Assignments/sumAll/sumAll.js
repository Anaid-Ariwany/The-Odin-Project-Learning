const sumAll = function (num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }

    let total = 0;

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            total += i;
        }
        return total;
    } else if (num1 > num2) {
        for (let j = num1; j >= num2; j--) {
            total += j;
        }
        return total;
    }
};
/* console.log(sumAll(5, 1)); */

// Do not edit below this line
module.exports = sumAll;