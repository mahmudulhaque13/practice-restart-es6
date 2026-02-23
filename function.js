// দুটি সংখ্যার যোগফল বের করার function লেখো
// function sum(a, b) {
//   return a + b;
// }

// // ব্যবহার
// const result = sum(10, 20);
// console.log(result); // 30

// even/odd চেক করার function লেখো
// const checkEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

// console.log(checkEvenOdd(4)); // Even
// console.log(checkEvenOdd(9)); // Odd

// array এর সব সংখ্যার sum বের করার function লেখো
// function arraySum(arr) {
//   return arr.reduce((sum, val) => {
//     if (typeof val === "number") {
//       sum += val;
//     }
//     return sum;
//   }, 0);
// }

// console.log(arraySum([1, "a", 3, null, 5])); // 9

// string reverse করার function লেখো
// function reverseString(str) {
//   if (typeof str !== "string") {
//     return "Please provide a string";
//   }
//   return str.split("").reverse().join("");
// }

// console.log(reverseString(123)); // Please provide a string

// unit convert করার function লেখো (inch → feet)
// function inchToFeet(inch) {
//   if (typeof inch !== "number" || inch < 0) {
//     return "Invalid input";
//   }
//   return inch / 12;
// }

// console.log(inchToFeet(48)); // 4
// console.log(inchToFeet("12")); // Invalid input

// calculator function বানাও (add, sub, mul, div)
// const calculator = {
//   add: (a, b) => a + b,
//   sub: (a, b) => a - b,
//   mul: (a, b) => a * b,
//   div: (a, b) => (b === 0 ? "Division by zero not allowed" : a / b),
// };

// // ব্যবহার
// console.log(calculator.add(6, 3)); // 9
// console.log(calculator.mul(6, 3)); // 18

// array এর average বের করো
// const arrayAverage = (arr) =>
//   arr.reduce((sum, num) => sum + num, 0) / arr.length;

// console.log(arrayAverage([5, 15, 25])); // 15

// array থেকে শুধু unique value রাখো
// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// // ব্যবহার
// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]

// object এর ভিতরে nested object access করো
const user = {
  name: "Mahmud",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user.address.city); // Dhaka
console.log(user.address.country); // Bangladesh
