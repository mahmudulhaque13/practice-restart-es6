// Polyfill: Array.prototype.map
// নিজে থেকে map() function বানাও (polyfill)।
// Array.prototype.myMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// // test
// const nums = [1, 2, 3];
// console.log(nums.myMap((n) => n * 2)); // [2,4,6]

// Deep Clone Object (Without JSON)
// nested object deep copy করো।
// const obj = { a: 1, b: { c: 2 } };
// const deepClone = (obj) => {
//   if (obj === null || typeof obj !== "object") return obj;

//   const copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }
//   return copy;
// };

// const clone = deepClone(obj);
// clone.b.c = 99;

// console.log(obj.b.c); // 2

// Flatten Deep Nested Array
[1, [2, [3, [4]]]];

const flatten = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    [],
  );

console.log(flatten([1, [2, [3, [4]]]]));
