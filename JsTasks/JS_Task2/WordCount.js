//https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
function countWords(str) {
  str = str.trim();
  if (str.length === 0) {
    return 0;
  }
  return str.split(/\s+/).length;
  //return str.trim().split(/\s+/).length;
}
