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
function inchToFeet(inch) {
  if (typeof inch !== "number" || inch < 0) {
    return "Invalid input";
  }
  return inch / 12;
}

console.log(inchToFeet(48)); // 4
console.log(inchToFeet("12")); // Invalid input
