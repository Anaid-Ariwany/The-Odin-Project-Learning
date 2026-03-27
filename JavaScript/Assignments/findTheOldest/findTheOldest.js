const findTheOldest = function () {
    const people = arguments[0];
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        const person = people[i];
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        if (personAge > oldestAge) {
            oldest = person;
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;