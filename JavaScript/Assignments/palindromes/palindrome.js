const palindromes = function (word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = word.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // Check if the cleaned string is the same forwards and backwards
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;