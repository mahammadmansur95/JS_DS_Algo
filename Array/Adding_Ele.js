let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//inserting at end

numbers[numbers.length] = 10;
numbers.push(11); /* using push method */
numbers.push(12, 13);

//inserting at the first

let insertFirstPosition = (arr, value) => {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
};

insertFirstPosition(numbers, -1);
numbers.unshift(-2); /* Using unshift method */
numbers.unshift(-4, -3);

//inserting in between the array

numbers.splice(4,0,3,2,1);

console.log(numbers);