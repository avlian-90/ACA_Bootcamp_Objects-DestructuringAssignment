/* Create a one-liner function
Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties: 

name
population
continent */

function getCityFacts(obj) {
  let { name, population, continent } = obj;
  let facts = `${name} has a population of ${population} and is situated in ${continent}`;
  return facts;
}

console.log(
  getCityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  })
); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
console.log(
  getCityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  })
); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
