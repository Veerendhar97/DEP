//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
function zero(fun) {
  return fun ? fun(0) : 0;
}
function one(fun) {
  return fun ? fun(1) : 1;
}
function two(fun) {
  return fun ? fun(2) : 2;
}
function three(fun) {
  return fun ? fun(3) : 3;
}
function four(fun) {
  return fun ? fun(4) : 4;
}
function five(fun) {
  return fun ? fun(5) : 5;
}
function six(fun) {
  return fun ? fun(6) : 6;
}
function seven(fun) {
  return fun ? fun(7) : 7;
}
function eight(fun) {
  return fun ? fun(8) : 8;
}
function nine(fun) {
  return fun ? fun(9) : 9;
}

function plus(value2) {
  return function(value1) {
    return value1 + value2;
  };
}
function minus(value2) {
  return function(value1) {
    return value1 - value2;
  };
}
function times(value2) {
  return function(value1) {
    return value1 * value2;
  };
}
function dividedBy(value2) {
  return function(value1) {
    return Math.floor(value1 / value2);
  };
}
