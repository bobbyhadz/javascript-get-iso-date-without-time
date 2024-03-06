console.log('bobbyhadz.com');

// // 1) Get an ISO Date string without Time using JavaScript

const date = new Date();

// ✅ If you have a Date object
const [withoutTime] = date.toISOString().split('T');
console.log(withoutTime); // 👉️ 2023-07-27

// ✅ If you have a plain ISO string
const [withoutT] = '2022-11-14T00:55:31.820Z'.split('T');
console.log(withoutT); // 👉️ "2022-11-14"

// // ----------------------------------------------------------

// // // 2) Get ISO Date without the Milliseconds using JavaScript

// // ✅ If you have a Date object
// const date = new Date();
// const withoutMs = date.toISOString().split('.')[0] + 'Z';
// console.log(withoutMs); // 👉️ "2023-07-27T05:08:50Z"

// // ✅ If you have a plain ISO string
// const isoStr = '2022-07-21T09:35:31.820Z';
// const withoutMilliseconds = isoStr.split('.')[0] + 'Z';
// console.log(withoutMilliseconds); // 👉️ "2022-07-21T09:35:31Z"
