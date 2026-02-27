// Multiple setState Batching (React behavior simulation)
let count = 0;

const setCount = (updater) => {
  count = typeof updater === "function" ? updater(count) : updater;
};

setCount(count + 1);
setCount(count + 1);

console.log("Wrong way:", count); // 1 ❌

// correct
count = 0;
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);

console.log("Correct way:", count); // 2 ✅
