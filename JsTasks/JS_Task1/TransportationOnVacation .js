//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
function rentalCarCost(days) {
  var totalRent;
  days < 3 && (totalRent = days * 40);
  days >= 3 && days < 7 && (totalRent = days * 40 - 20);
  days >= 7 && (totalRent = days * 40 - 50);
  return totalRent;
}
