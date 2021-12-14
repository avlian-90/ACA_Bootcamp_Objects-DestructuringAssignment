/* Create a one-liner function
Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties: 

name
population
continent */

function getCityFacts(obj) {
  let { name, population, continent } = obj;
  let facts = name + population + continent;
  return facts;
}

console.log(
  getCityFacts({ name: "Armenia", population: 3000000, continent: "Asia" })
);
