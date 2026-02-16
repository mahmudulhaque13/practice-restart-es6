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

const employees = [
  { name: "Rahim", dept: "IT" },
  { name: "Karim", dept: "HR" },
  { name: "Salma", dept: "IT" },
];

const grouped = employees.reduce((acc, emp) => {
  acc[emp.dept] = acc[emp.dept] || [];
  acc[emp.dept].push(emp);
  return acc;
}, {});

console.log(grouped);
