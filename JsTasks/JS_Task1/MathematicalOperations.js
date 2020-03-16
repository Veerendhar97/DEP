//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
  // return eval(value1+operation+value2)
  var n;
  switch (operation) {
    case "+":
      return (n = value1 + value2);
      break;
    case "-":
      return (n = value1 - value2);
      break;
    case "*":
      return (n = value1 * value2);
      break;
    case "/":
      return (n = value1 / value2);
      break;
  }
}
