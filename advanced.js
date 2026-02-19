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
const asyncQueue = async (tasks) => {
  for (let task of tasks) {
    await task();
  }
};

asyncQueue([
  () => Promise.resolve(console.log("Task 1")),
  () => Promise.resolve(console.log("Task 2")),
  () => Promise.resolve(console.log("Task 3")),
]);
