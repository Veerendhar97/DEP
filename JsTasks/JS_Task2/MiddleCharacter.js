//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
