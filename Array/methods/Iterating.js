let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

/* every method -> The every method iterates each element of the array until the function returns false */

let res = numbers.every(isEven); // in this it will execute only once as 1 is not even it will retrn false

/* some method -> it will iterate through every elememt until the return of the function is true */

let res_1 = numbers.some(isEven); //it will true at second time as 2 is even number
// console.log(res_1);

/* forEach method */

// numbers.forEach(x => console.log(x,x%2 === 0));

/* map method */

let res_3 = numbers.map(isEven);
// console.log(res_3);

/* filter method */

let evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

/* reduce method */

let res_4 = numbers.reduce((previous, current) => previous + current);
// console.log(res_4);

/* For .of loop */

// for (const n of numbers) {
//   console.log(n % 2 === 0 ? "even" : "odd");
// }

/* Keys method */

// [...numbers.keys()].map(x => console.log(x));

// for( const n of numbers.keys()){
//     console.log(n);
// }

/* values method */

// [...numbers.values()].map(x => console.log(x));

/* entries method */

// [...numbers.entries()].map(x => console.log(x));

/* Sorting methods - these will change the original array*/

// let reverse_arr = numbers.reverse();
// let sorted_arr = numbers.sort();
// let sorted_arr_asc = numbers.sort((a, b) => a - b);
// let sorted_arr_dec = numbers.sort((a, b) => b - a);

/* Searching methods */

// console.log(numbers.indexOf(10));
// console.log(numbers.indexOf(100));

// numbers.push(10);
// console.log(numbers.lastIndexOf(10));
// console.log(numbers.lastIndexOf(100));

// function multipleOf13(element, index, array) {
//   return element % 13 == 0;
// }
// console.log(numbers.find(multipleOf13));
// console.log(numbers.findIndex(multipleOf13));

// console.log(numbers.includes(15));
// console.log(numbers.includes(20));
// let numbers2 = [7, 6, 5, 4, 3, 2, 1];
// console.log(numbers2.includes(4, 5)); //(ele,position)


// console.log(numbers.toString());
