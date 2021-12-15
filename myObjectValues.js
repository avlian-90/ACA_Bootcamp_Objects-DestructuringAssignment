// Implementation of Object.values() method

const myObj = {
  name: "Liana",
  surname: "Avagyan",
  age: 31,
  profession: "developer",
};

function myObjectValues(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

console.log(myObjectValues(myObj));
console.log(Object.values(myObj));
