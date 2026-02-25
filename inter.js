// একটি sentence এর প্রতিটি word-এর প্রথম letter uppercase করো।
// const text = "javascript is awesome";
// const capitalized = text
//   .split(" ")
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(capitalized);
// // JavaScript Is Awesome

// Count Vowels in String
// const str = "programming";
// const vowels = ["a", "e", "i", "o", "u"];

// const count = [...str].filter((ch) => vowels.includes(ch)).length;

// console.log(count); // 3

// একটি string এর length বের করো
// const text = "Hello World";
// const length = text.length;

// console.log(length); // 11

// string এর মধ্যে নির্দিষ্ট word আছে কিনা চেক করো
// const sentence = "I love JavaScript programming";
// const word = "JavaScript";

// const result = sentence.includes(word);
// console.log(result); // true

// একটি sentence থেকে সব word আলাদা করো
// const sentence = "I love JavaScript programming";

// const words = sentence.split(" ");
// console.log(words);
// // ["I", "love", "JavaScript", "programming"]

// string reverse করো
// const text = "Hello World";

// const reversed = text.split("").reverse().join("");
// console.log(reversed); // "dlroW olleH"

// string palindrome কিনা চেক করো
// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

// object এর উপর loop চালাও
// const user = {
//   name: "Mahmud",
//   age: 25,
//   role: "admin",
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// sentence থেকে সবচেয়ে বড় word বের করো।
// const text = "JavaScript makes web development powerful";

// const longestWord = text
//   .split(" ")
//   .reduce(
//     (longest, word) => (word.length > longest.length ? word : longest),
//     "",
//   );

// console.log(longestWord); // development

// দুইটা string anagram কিনা চেক করো।
// const isAnagram = (a, b) =>
//   a.split("").sort().join("") === b.split("").sort().join("");

// console.log(isAnagram("listen", "silent")); // true

// element frequency অনুযায়ী sort করো।
// const freqSort = (arr) => {
//   const freq = arr.reduce((a, v) => {
//     a[v] = (a[v] || 0) + 1;
//     return a;
//   }, {});

//   return arr.sort((a, b) => freq[b] - freq[a]);
// };

// console.log(freqSort([1, 1, 2, 2, 2, 3]));

// Delay Function
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// await delay(1000);
// console.log("1 second later");

// একটি string-এ প্রথম যে character repeat হয় না, সেটা বের করো।
// const str = "aabbccdeff";
// const firstUnique = (str) => {
//   const freq = {};

//   for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
//   for (let ch of str) if (freq[ch] === 1) return ch;

//   return null;
// };

// console.log(firstUnique("aabbccdeff")); // d

// Rotate Array (Right)
// rotate by k steps
// rotate([1, 2, 3, 4, 5], 2);
// // [4,5,1,2,3]
// const rotate = (arr, k) => {
//   k %= arr.length;
//   return [...arr.slice(-k), ...arr.slice(0, -k)];
// };

// State Update Without Mutation
// let users = [
//   { id: 1, name: "Rahim", active: false },
//   { id: 2, name: "Karim", active: false },
// ];

// const updatedUsers = users.map((user) =>
//   user.id === 2 ? { ...user, active: true } : user,
// );

// console.log("Before:", users);
// console.log("After:", updatedUsers);

// Toggle Checkbox Logic
let selectedIds = [1, 2];

const toggle = (arr, id) =>
  arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];

selectedIds = toggle(selectedIds, 2);
console.log(selectedIds); // [1]

selectedIds = toggle(selectedIds, 3);
console.log(selectedIds); // [1,3]
