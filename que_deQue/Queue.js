/* A queue is an ordered collection of items that follows the first in, first out (FIFO) */

class Queue {
  constructor() {
    this.count = 0;
    this.firstElement = 0;
    this.items = {};
  }

  enqueue(ele) {
    this.items[this.count] = ele;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.firstElement];
    delete this.items[this.firstElement];
    this.count--;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.firstElement];
  }

  size() {
    return this.count - this.firstElement;
  }

  isEmpty() {
    return this.count - this.firstElement === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.firstElement = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.firstElement]}`;
    for (let i = this.firstElement + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

/* Two check the time taking to execute the two different methods */

// let obj = { 0: 1, 1: 2, 2: 3 };

// console.time("Execution Time");
// let toString = (items) => {
//     let objString = `${items[0]}`;
//     for (let i = 1; i < Object.values(obj).length; i++) {
//       objString = `${objString},${items[i]}`;
//     }
//     return objString;
//   };
//   let result = toString(obj);
//   console.log(result);
// console.timeEnd("Execution Time"); //Execution Time: 4.941ms

// console.log(Object.values(obj).toString()); //Execution Time: 5.54ms



/* Checking the class */


const queue = new Queue();
queue.enqueue('mansur');
queue.enqueue('humera');
console.log(queue.dequeue());
console.log(queue,queue.size());