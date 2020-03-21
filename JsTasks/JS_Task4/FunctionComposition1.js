//https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript

function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments));
  };
}
