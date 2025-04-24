// My solution

snail = function (array) {
  let res = [];

  function topRow() {
    res = res.concat(array.shift());
  }

  function rightCol() {
    for (let i = 0; i < array.length; i++) {
      res.push(array[i].pop());
    }
  }

  function bottomRow() {
    res = res.concat(array.pop().reverse());
  }

  function leftCol() {
    for (let i = array.length - 1; i > -1; i--) {
      res.push(array[i].shift());
    }
  }

  while (array.length > 0) {
    if (array.length > 0) topRow();
    if (array.length > 0) rightCol();
    if (array.length > 0) bottomRow();
    if (array.length > 0) leftCol();
  }

  return res;
};

// Top solution

snail = function (array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = result ? result.concat(array.shift()) : array.shift();
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};
