let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* removing from the end */

let removed = numbers.pop(); //It returns the removed element

/* removing from the first */

// for (let i = 0; i < numbers.length; i++) {
//   /* By this we can
// only shift the values but length remains same */
//   numbers[i] = numbers[i + 1];
// }

let reIndex = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

let removeFirstPosition = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  return reIndex(arr);
};

let result = removeFirstPosition(numbers);

let result_1 = numbers.shift(); /* Using shift method it will retyrn shifted ele */

//removing from a specific position in an array

numbers.splice(2,2);

console.log(numbers);