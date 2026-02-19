const convertToCelsius = function (num) {
    let numFarenheit = (num - 32) * (5 / 9);
    let roundedFarenheit = Math.round(numFarenheit * 10) / 10;
    return roundedFarenheit;
};

const convertToFahrenheit = function (num) {
    let numCelsius = num * (9 / 5) + 32;
    let roundedCelsius = Math.round(numCelsius * 10) / 10;
    return roundedCelsius;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};