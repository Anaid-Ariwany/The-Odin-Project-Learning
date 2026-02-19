const repeatString = function (str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let newStr = '';
        for (let i = 1; i <= num; i++) {
            newStr += str;
        }
        return newStr;
    }
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
