// একটি sentence এর প্রতিটি word-এর প্রথম letter uppercase করো।
const text = "javascript is awesome";
const capitalized = text
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);
// JavaScript Is Awesome
