//https://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
  var array = string.split(".");
  myObj = obj;
  for (var i in array) {
    if (myObj[i] == undefined) {
      return undefined;
    } else {
      myObj = myObj[i];
    }
  }
  return myObj;
};
