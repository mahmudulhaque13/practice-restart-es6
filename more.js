// Nested object copy করো।
const obj = {
  name: "Mahmud",
  address: { city: "Dhaka" },
};

const clone = structuredClone(obj);

clone.address.city = "Chittagong";

console.log("Original:", obj);
console.log("Clone:", clone);
