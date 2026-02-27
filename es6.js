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
// let theme = "light";

// const setTheme = (newTheme) => {
//   if (theme !== newTheme) {
//     theme = newTheme;
//     console.log("Theme changed:", theme);
//   } else {
//     console.log("No re-render");
//   }
// };

// setTheme("light");
// setTheme("dark");

// Form Validation Logic (Before Submit)
// let form = { email: "", password: "" };

// const validate = (form) => {
//   if (!form.email) return "Email required";
//   if (!form.password) return "Password required";
//   return "Valid";
// };

// form.email = "test@gmail.com";
// console.log(validate(form));

// form.password = "123456";
// console.log(validate(form));

// Dependent useEffect Logic (Manual Simulation)
let prevId;
const fetchData = (id) => console.log("Fetching user:", id);

const useEffectSim = (id) => {
  if (id !== prevId) {
    fetchData(id);
    prevId = id;
  }
};

useEffectSim(1);
useEffectSim(1); // no call
useEffectSim(2); // re-fetch
