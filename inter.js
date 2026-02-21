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
const sentence = "I love JavaScript programming";
const word = "JavaScript";

const result = sentence.includes(word);
console.log(result); // true
