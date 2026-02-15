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
const cart = [
  { item: "Book", price: 300 },
  { item: "Pen", price: 50 },
  { item: "Notebook", price: 150 },
];

const total = cart.reduce((sum, { price }) => sum + price, 0);

console.log(total);
