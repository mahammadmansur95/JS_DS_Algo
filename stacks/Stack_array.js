/* A stack is an ordered collection of items that follows the last in, first out
(LIFO) principle. */

export class Stack {
  constructor() {
    this.items = [];
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    return this.items.pop();
  }

  //returns the last item
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toString() {
    return this.items.toString();
  }
}

// let stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(10);
// stack.pop();
// console.log(stack.size());
// console.log(stack.isEmpty());
