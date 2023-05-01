const palindromes = function (text) {
  text = text.toLowerCase().replace(/[^a-z]/gi,"");
  let textReverse = text.split('').reverse().join('');
  return (text === textReverse);
};

// Do not edit below this line
module.exports = palindromes;
