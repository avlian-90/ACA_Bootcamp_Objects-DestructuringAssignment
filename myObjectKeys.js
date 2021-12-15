// Implementation of Object.keys() method

const myObj = {
  name: "Liana",
  surname: "Avagyan",
  age: 31,
  profession: "developer",
};

function myObjectKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(myObjectKeys(myObj));
console.log(Object.keys(myObj));
