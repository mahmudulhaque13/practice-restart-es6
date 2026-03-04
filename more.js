// Nested object copy করো।
// const obj = {
//   name: "Mahmud",
//   address: { city: "Dhaka" },
// };

// const clone = structuredClone(obj);

// clone.address.city = "Chittagong";

// console.log("Original:", obj);
// console.log("Clone:", clone);

// Same id থাকলে duplicate remove করো।
const products = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Book" },
  { id: 1, name: "Pen" },
];

const unique = [...new Map(products.map((p) => [p.id, p])).values()];

console.log(unique);
