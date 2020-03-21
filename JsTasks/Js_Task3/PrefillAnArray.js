//https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

function prefill(n, v) {
  var a = parseInt(n);
  if (isNaN(a) || a < 0 || n % 1 != 0) {
    throw new TypeError(n + " is invalid");
  } else {
    return new Array(a).fill(v);
  }
}
