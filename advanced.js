// Polyfill: Array.prototype.map
// নিজে থেকে map() function বানাও (polyfill)।
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// test
const nums = [1, 2, 3];
console.log(nums.myMap((n) => n * 2)); // [2,4,6]
