/* Joining arrys */
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
//concat method
let numbers = negativeNumbers.concat(zero, positiveNumbers);

//new method
const result = [...negativeNumbers,zero,...positiveNumbers,];

console.log(numbers,result);