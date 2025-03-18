// Code your solution in this file!
// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function that returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a multiplier function
// Export functions for testing

const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, selectFunction) => {
    return selectFunction(drivers);
};
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};


