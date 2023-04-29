const removeFromArray = function() {
  const array = arguments[0];
  for (i = 1; i < arguments.length; i++) {
    if (array.indexOf(arguments[i]) > -1) {
      let index = array.indexOf(arguments[i]);
      const removed = array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;