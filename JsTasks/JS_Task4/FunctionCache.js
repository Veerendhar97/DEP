//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript

function cache(func) {
  var cacheObject = {};
  var cacheArray = new Array();
  return function test(value1, value2) {
    console.log(value1 + " hello" + value2);
    var argumentArray = new Array();
    argumentArray.push(value1);
    argumentArray.push(value2);
    var st = JSON.stringify(argumentArray);
    //var val=value1.valueOf()+""+value2.valueOf();
    if (cacheArray.includes(st)) {
      return cacheObject[st];
    } else {
      cacheArray.push(st);
      cacheObject[st] = func(value1, value2);
      return cacheObject[st];
    }
  };
}
