// Multiple setState Batching (React behavior simulation)
// let count = 0;

// const setCount = (updater) => {
//   count = typeof updater === "function" ? updater(count) : updater;
// };

// setCount(count + 1);
// setCount(count + 1);

// console.log("Wrong way:", count); // 1 ❌

// // correct
// count = 0;
// setCount((prev) => prev + 1);
// setCount((prev) => prev + 1);

// console.log("Correct way:", count); // 2 ✅

// Conditional State Update (Avoid Unnecessary Render)
let theme = "light";

const setTheme = (newTheme) => {
  if (theme !== newTheme) {
    theme = newTheme;
    console.log("Theme changed:", theme);
  } else {
    console.log("No re-render");
  }
};

setTheme("light");
setTheme("dark");
