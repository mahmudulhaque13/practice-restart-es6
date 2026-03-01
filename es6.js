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
// const createCallback = () => {
//   let cache;
//   return (fn) => {
//     if (!cache) {
//       cache = fn;
//       console.log("Callback created");
//     }
//     return cache;
//   };
// };

// const memoizeCallback = createCallback();

// const cb1 = memoizeCallback(() => console.log("Hello"));
// const cb2 = memoizeCallback(() => console.log("Hello"));

// console.log(cb1 === cb2); // true

// List Update After Delete (Key logic)
// let todos = [
//   { id: 1, text: "A" },
//   { id: 2, text: "B" },
//   { id: 3, text: "C" },
// ];

// const deleteTodo = (id) => {
//   todos = todos.filter((t) => t.id !== id);
//   console.log(todos);
// };

// deleteTodo(2);

// Loading + Error State Pattern
// let loading = false;
// let error = null;

// const fetchData = async () => {
//   loading = true;
//   error = null;
//   console.log("Loading:", loading);

//   try {
//     throw new Error("Failed");
//   } catch (e) {
//     error = e.message;
//   } finally {
//     loading = false;
//   }

//   console.log({ loading, error });
// };

// fetchData();

// Derived Boolean State
// let items = [];

// const hasItems = () => items.length > 0;

// console.log(hasItems()); // false
// items.push(1);
// console.log(hasItems()); // true

// Ref Logic (Persist Value Without Render)
// const createRef = (initial) => ({ current: initial });

// const countRef = createRef(0);

// countRef.current++;
// countRef.current++;

// console.log("Ref value:", countRef.current);

// Previous State Tracking
// let prev;
// const trackPrev = (current) => {
//   console.log("Prev:", prev, "Current:", current);
//   prev = current;
// };

// trackPrev(10);
// trackPrev(20);

// Search + Debounce + Cancel (Logic Only)
// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// };

// const searchApi = (q) => console.log("Searching:", q);
// const debounced = debounce(searchApi, 400);

// debounced("r");
// debounced("re");
// debounced("rea");

// State Queue (React setState Queue concept)
// let state = 0;
// const queue = [];

// const setState = (updater) => {
//   queue.push(updater);
// };

// setState((prev) => prev + 1);
// setState((prev) => prev + 1);
// setState((prev) => prev * 2);

// // simulate React flush
// queue.forEach((fn) => {
//   state = fn(state);
// });

// console.log("Final state:", state); // (0+1+1)*2 = 4

// Conditional Rendering Logic (Multi-state)
// let loading = false;
// let error = null;
// let data = null;

// const render = () => {
//   if (loading) return "Loading...";
//   if (error) return "Error!";
//   if (!data) return "No Data";
//   return "Show Data";
// };

// console.log(render());

// loading = true;
// console.log(render());

// loading = false;
// data = [1, 2, 3];
// console.log(render());

// Prevent Double API Call (StrictMode idea)
// let called = false;

// const fetchData = () => {
//   if (called) return;
//   called = true;
//   console.log("API called once");
// };

// fetchData();
// fetchData(); // ignored

// Derived Filter + Sort Logic
const products = [
  { name: "A", price: 100 },
  { name: "B", price: 50 },
  { name: "C", price: 200 },
];

const filteredSorted = products
  .filter((p) => p.price >= 100)
  .sort((a, b) => a.price - b.price);

console.log(filteredSorted);
