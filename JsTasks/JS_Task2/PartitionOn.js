//https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

function partitionOn(pred, items) {
  var fallacy = items.filter(function(e) {
    return !pred(e);
  });
  var truth = items.filter(pred);
  items.length = 0;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 8d449b79638403c519604ee5cc24a269211b1568
  var p = 0;
  for (var i = 0; i < f.length; i++) {
    items.push(f[i]);
    p++;
  }
  for (var i = 0; i < t.length; i++) {
    items.push(t[i]);
    p++;
<<<<<<< HEAD
=======
=======

>>>>>>> 8d449b79638403c519604ee5cc24a269211b1568
  var ptr = 0;
  for (var i = 0; i < fallacy.length; i++) {
    items[ptr] = fallacy[i];
    ptr++;
  }
    
  for (var i = 0; i < truth.length; i++) {
    items[ptr] = truth[i];
    ptr++;
<<<<<<< HEAD
>>>>>>> e7855b8070d1dc6966cc3771d3bd37b0cc7f54c7
=======

>>>>>>> 8d449b79638403c519604ee5cc24a269211b1568
  }
  return fallacy.length;
}
