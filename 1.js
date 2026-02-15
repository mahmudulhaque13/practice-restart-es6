const users = [
  { name: "Rahim", email: "rahim@gmail.com" },
  { name: "Karim", email: "karim@gmail.com" },
];

const emails = users.map(({ email }) => email);

console.log(emails);
