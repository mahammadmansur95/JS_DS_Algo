/* Decimal to binary */
import  {Stack} from "./Stack_array.js";

const decimalToBinary = (decNum, base) => {
  let remStack = new Stack();
  let number = decNum;
  let rem;
  let binaryString = ``;

  if(!(base >=2 && base <= 36)){
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};


let result = decimalToBinary(100345, 8);
console.log(result);
