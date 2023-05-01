const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  return sumArray = arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  let total = 1;
  for (let num of arr){
    total *= num;
  }
  return total;
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n1) {
  let total = 1;
  let i = n1;
	if (n1 === 0 || n1 === 1) return 1;
  while (i > 1) {
    total = total * i;

    i--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
