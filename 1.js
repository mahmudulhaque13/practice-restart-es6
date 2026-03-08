// const users = [
//   { name: "Rahim", email: "rahim@gmail.com" },
//   { name: "Karim", email: "karim@gmail.com" },
// ];

// const emails = users.map(({ email }) => email);

// console.log(emails);

// filter

// const numbers = [10, 60, 45, 80, 30, 90];

// const greaterThan50 = numbers.filter((n) => n > 50);

// console.log(greaterThan50);

// reduce
// const cart = [
//   { item: "Book", price: 300 },
//   { item: "Pen", price: 50 },
//   { item: "Notebook", price: 150 },
// ];

// const total = cart.reduce((sum, { price }) => sum + price, 0);

// console.log(total);

// find
// const nums = [3, 7, 9, 10, 12];

// const firstEven = nums.find((n) => n % 2 === 0);

// console.log(firstEven); // 10

// Remove Duplicates (Set)
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const unique = [...new Set(arr)];

// console.log(unique);

// Object.entries()
// const person = {
//   name: "Hasan",
//   age: 28,
//   city: "Dhaka",
// };

// const entries = Object.entries(person);

// 5 quick examples on loops

// 1. for loop (counts from 0 to 4):
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop (counts until a condition is false):
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. do-while loop (executes at least once, then checks condition):
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// 4. for-of loop (iterates over arrays):
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

// 5. for-in loop (iterates over object properties):
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// Additional 5 loop examples

// 6. forEach loop (array method):
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num);
});

// 7. Nested for loop:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 8. for loop with break:
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// 9. while loop with continue:
let k = 0;
while (k < 10) {
  k++;
  if (k % 2 === 0) continue;
  console.log(k);
}

// 10. for-of with strings:
const str = "hello";
for (const char of str) {
  console.log(char);
}

// console.log(entries);

// একটি array-তে প্রতিটি element কয়বার আছে তা count করো।
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const countFruits = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(countFruits);
// // { apple: 3, banana: 2, orange: 1 }

// department অনুযায়ী employee গুলো group করো।

// const employees = [
//   { name: "Rahim", dept: "IT" },
//   { name: "Karim", dept: "HR" },
//   { name: "Salma", dept: "IT" },
// ];

// const grouped = employees.reduce((acc, emp) => {
//   acc[emp.dept] = acc[emp.dept] || [];
//   acc[emp.dept].push(emp);
//   return acc;
// }, {});

// console.log(grouped);

// cart থেকে total price বের করো।
// const cart = [
//   { item: "Book", price: 200, qty: 2 },
//   { item: "Pen", price: 10, qty: 5 },
// ];
// const total = cart.reduce((sum, { price, qty }) => sum + price * qty, 0);

// console.log(total); // 450

// city না থাকলে "Unknown" দেখাবে।
// const user = {
//   name: "Karim",
//   address: {},
// };
// const city = user.address?.city ?? "Unknown";

// console.log(city);
// "Unknown"

// id কে key করে object বানাও।
// const users = [
//   { id: 1, name: "Rahim" },
//   { id: 2, name: "Karim" },
// ];
// const userMap = users.reduce((acc, user) => {
//   acc[user.id] = user;
//   return acc;
// }, {});

// console.log(userMap);
