const removeFromArray = function (arr, ...args) {
    let result = [];
    for (let item of arr) {
        if (!args.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;