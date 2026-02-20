// Polyfill: Array.prototype.map
// নিজে থেকে map() function বানাও (polyfill)।
// Array.prototype.myMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// // test
// const nums = [1, 2, 3];
// console.log(nums.myMap((n) => n * 2)); // [2,4,6]

// Deep Clone Object (Without JSON)
// nested object deep copy করো।
// const obj = { a: 1, b: { c: 2 } };
// const deepClone = (obj) => {
//   if (obj === null || typeof obj !== "object") return obj;

//   const copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepClone(obj[key]);
//   }
//   return copy;
// };

// const clone = deepClone(obj);
// clone.b.c = 99;

// console.log(obj.b.c); // 2

// Flatten Deep Nested Array
// [1, [2, [3, [4]]]];

// const flatten = (arr) =>
//   arr.reduce(
//     (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
//     [],
//   );

// console.log(flatten([1, [2, [3, [4]]]]));

// Promise.all Polyfill
// Promise.all() নিজে বানাও।
// const promiseAll = (promises) =>
//   new Promise((resolve, reject) => {
//     let results = [];
//     let completed = 0;

//     promises.forEach((p, i) => {
//       Promise.resolve(p)
//         .then((res) => {
//           results[i] = res;
//           completed++;
//           if (completed === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(reject);
//     });
//   });

// // test
// promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
//   console.log,
// );

// Memoization Function
// expensive function cache করো।
// const memoize = (fn) => {
//   const cache = {};
//   return (...args) => {
//     const key = JSON.stringify(args);
//     if (cache[key]) return cache[key];
//     cache[key] = fn(...args);
//     return cache[key];
//   };
// };

// const slowAdd = (a, b) => {
//   console.log("calculating...");
//   return a + b;
// };

// const fastAdd = memoize(slowAdd);

// fastAdd(2, 3);
// fastAdd(2, 3); // cached

// Implement once() Function
// function শুধু একবার চলবে।
// const once = (fn) => {
//   let called = false;
//   let result;
//   return (...args) => {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//     }
//     return result;
//   };
// };

// const init = once(() => console.log("Initialized"));
// init();
// init(); // ignored

// Event Emitter (Mini System)
// simple event system বানাও।
// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }

//   on(event, listener) {
//     (this.events[event] ||= []).push(listener);
//   }

//   emit(event, data) {
//     this.events[event]?.forEach((fn) => fn(data));
//   }
// }

// // test
// const emitter = new EventEmitter();
// emitter.on("message", (msg) => console.log(msg));
// emitter.emit("message", "Hello World");

// Throttle Function
// function নির্দিষ্ট সময় পরপর চলবে।
// const throttle = (fn, delay) => {
//   let last = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - last >= delay) {
//       last = now;
//       fn(...args);
//     }
//   };
// };

// Async Queue (Sequential Execution)
// async task গুলো একটার পর একটা চলবে
// const asyncQueue = async (tasks) => {
//   for (let task of tasks) {
//     await task();
//   }
// };

// asyncQueue([
//   () => Promise.resolve(console.log("Task 1")),
//   () => Promise.resolve(console.log("Task 2")),
//   () => Promise.resolve(console.log("Task 3")),
// ]);

// Custom bind() Polyfill
// নিজে Function.prototype.bind বানাও।
// Function.prototype.myBind = function (context, ...args) {
//   const fn = this;
//   return function (...rest) {
//     return fn.apply(context, [...args, ...rest]);
//   };
// };

// // test
// function greet(greeting, name) {
//   return `${greeting}, ${name}`;
// }

// const sayHi = greet.myBind(null, "Hi");
// console.log(sayHi("Rahim"));

// Async Retry Logic
// fail হলে API call retry করবে (max n times)।
// const retry = async (fn, retries = 3) => {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries === 0) throw err;
//     return retry(fn, retries - 1);
//   }
// };

// // usage
// retry(() => fetch("https://api.example.com"), 3);

// Promise Pool (Concurrency Control)
// একসাথে max N promise চলবে।
// const promisePool = async (tasks, limit) => {
//   const results = [];
//   const executing = [];

//   for (const task of tasks) {
//     const p = Promise.resolve().then(task);
//     results.push(p);

//     if (limit <= tasks.length) {
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//       executing.push(e);
//       if (executing.length >= limit) {
//         await Promise.race(executing);
//       }
//     }
//   }
//   return Promise.all(results);
// };

// Immutable Deep Update
// nested object update করো without mutation।
// const state = {
//   user: {
//     profile: { name: "Rahim", age: 25 },
//   },
// };

// const newState = {
//   ...state,
//   user: {
//     ...state.user,
//     profile: {
//       ...state.user.profile,
//       age: 26,
//     },
//   },
// };

// Lazy Evaluation Generator
// infinite number generator বানাও।
// function* infinite() {
//   let i = 0;
//   while (true) yield i++;
// }

// const gen = infinite();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

// Observer Pattern (Pure JS)
// subscribe / notify system বানাও।
// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(fn) {
//     this.observers.push(fn);
//   }

//   notify(data) {
//     this.observers.forEach((fn) => fn(data));
//   }
// }

// Proxy for Validation
// negative age prevent করো।
// const user = new Proxy(
//   { age: 25 },
//   {
//     set(target, prop, value) {
//       if (prop === "age" && value < 0) {
//         throw new Error("Invalid age");
//       }
//       target[prop] = value;
//       return true;
//     },
//   },
// );

// user.age = 30; // ok

// Custom Iterable Object
// object কে iterable বানাও।
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let cur = this.from;
    return {
      next: () => ({
        value: cur,
        done: cur++ > this.to,
      }),
    };
  },
};

console.log([...range]); // ✅ [1, 2, 3, 4, 5]
