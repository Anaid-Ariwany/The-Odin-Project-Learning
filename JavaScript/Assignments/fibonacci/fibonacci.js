const fibonacci = function (memberNumber) {
    if (memberNumber < 0) {
        return "OOPS";
    }
    if (memberNumber === 0 || memberNumber === "0") {
        return 0;
    }
    if (memberNumber === 1 || memberNumber === "1") {
        return 1;
    }
    if (typeof memberNumber === "string") {
        memberNumber = parseInt(memberNumber);
    }

    return fibonacci(memberNumber - 1) + fibonacci(memberNumber - 2);

};


// Do not edit below this line
module.exports = fibonacci;