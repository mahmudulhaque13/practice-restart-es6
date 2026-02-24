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
const isAnagram = (a, b) =>
  a.split("").sort().join("") === b.split("").sort().join("");

console.log(isAnagram("listen", "silent")); // true
