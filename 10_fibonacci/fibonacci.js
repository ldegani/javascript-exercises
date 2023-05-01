const fibonacci = function(number) {
  number = Number(number);
  if (number < 0) return "OOPS";
  let sumOld = 0;
  let sum = 1;
  for (let i = 1; i < number; i++) {
    let total = sum;
    sum = total + sumOld;
    sumOld = total;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
