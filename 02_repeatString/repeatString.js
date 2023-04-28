const repeatString = function(name, num) {
  if (num < 0) return 'ERROR';
  let text = '';
  let i = 0;
  while (i < num) {
    text += name;
    i++;
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;
