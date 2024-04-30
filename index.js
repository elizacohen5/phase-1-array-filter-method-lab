// Code your solution here
function findMatching (arr, string) {
    let matchingDrivers = arr.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase();
    })
    return matchingDrivers;
}

// let drivers = ['eliza', 'pistachio']
// console.log(findMatching(drivers, 'eliza'));

function fuzzyMatch(nameArr, string) {
    let queriedNames = nameArr.filter(function (name) {
        let shortName = name.substr(0, string.length).toLowerCase();
        console.log(shortName)
        return shortName === string.toLowerCase(); 
    })
    return queriedNames;
}

// console.log(fuzzyMatch(drivers, 'e'))
// console.log(fuzzyMatch([ 'Sammy', 'Sarah', 'Sally' ], 'Sa'))

function matchName(driverObj, string) {
    let filteredDrivers = driverObj.filter((driver) => {
        return driver.name === string;
    })
    return filteredDrivers;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  console.log(matchName(drivers, 'Bobby'));