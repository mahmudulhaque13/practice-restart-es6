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
// let prevId;
// const fetchData = (id) => console.log("Fetching user:", id);

// const useEffectSim = (id) => {
//   if (id !== prevId) {
//     fetchData(id);
//     prevId = id;
//   }
// };

// useEffectSim(1);
// useEffectSim(1); // no call
// useEffectSim(2); // re-fetch

// Cleanup Logic (useEffect return)
// let timer;

// const startTimer = () => {
//   timer = setInterval(() => {
//     console.log("Running...");
//   }, 1000);
// };

// const cleanup = () => {
//   clearInterval(timer);
//   console.log("Cleaned up");
// };

// startTimer();
// setTimeout(cleanup, 3000);

// Prevent Infinite Loop (State Dependency)
// let value = 0;

// const setValue = (v) => {
//   if (v !== value) {
//     value = v;
//     console.log("Updated:", value);
//   }
// };

// setValue(1);
// setValue(1); // no infinite loop

// Memoized Callback (useCallback idea)
const createCallback = () => {
  let cache;
  return (fn) => {
    if (!cache) {
      cache = fn;
      console.log("Callback created");
    }
    return cache;
  };
};

const memoizeCallback = createCallback();

const cb1 = memoizeCallback(() => console.log("Hello"));
const cb2 = memoizeCallback(() => console.log("Hello"));

console.log(cb1 === cb2); // true
