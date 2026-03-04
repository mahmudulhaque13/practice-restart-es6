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
// const products = [
//   { id: 1, name: "Pen" },
//   { id: 2, name: "Book" },
//   { id: 1, name: "Pen" },
// ];

// const unique = [...new Map(products.map((p) => [p.id, p])).values()];

// console.log(unique);

// 3টা async function একসাথে run করো।
// const asyncTask = (time) =>
//   new Promise((resolve) => setTimeout(() => resolve(`Done in ${time}`), time));

// Promise.all([asyncTask(1000), asyncTask(2000), asyncTask(1500)]).then(
//   (result) => console.log(result),
// );

// নিজের map function বানাও।
const myMap = (arr, fn) => {
  const result = [];
  for (let item of arr) {
    result.push(fn(item));
  }
  return result;
};

console.log(myMap([1, 2, 3], (x) => x * 2));
