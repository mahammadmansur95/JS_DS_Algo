// Creating and initializing arrays

let daysOfWeek_1 = new Array(); /* Using new Keyword is not a best practise */
let daysOfWeek_2 = new Array(7);
let daysOfWeek_3 = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

let daysOfWeek_4 = []; /* simple and easiest */
let daysOfWeek_5 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//to know length
console.log(daysOfWeek_5.length);


//Accessing the array elements
const fibonacci = [];
fibonacci[0] = 1; 
fibonacci[1] = 1; 
for (let i = 2; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]); 
}
