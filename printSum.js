/* Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be + */

function printSum(operator, ...args) {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    switch (operator) {
      case "*":
        sum *= args[i];
        break;
      case "-":
        sum -= args[i];
        break;
      case "/":
        sum /= args[i];
        break;
      case "**":
        sum **= args[i];
        break;
      default:
        sum += args[i];
    }
  }
  return parseInt(sum + operator);
}

console.log(printSum("*", 1, 2, 3)); // 6
console.log(printSum(1, 2, 3, 4, 5)); // 15
console.log(printSum("-", 1, 2, 3, 6, 7)); // -17
console.log(printSum("**", 2, 3, 2)); // 64
