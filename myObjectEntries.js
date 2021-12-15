// Implementation of Object.entries() method

const myObj = {
  name: "Liana",
  surname: "Avagyan",
  age: 31,
  profession: "developer",
};

function myObjectEntries(obj) {
  const entries = [];
  for (const key in obj) {
    entries.push([key, obj[key]]);
  }
  return entries;
}

console.log(myObjectEntries(myObj));
console.log(Object.entries(myObj));
