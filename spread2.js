// How to pass arguments in sum function?

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // prints 6

// spreading the array numbers and passing it to a function as an argument
