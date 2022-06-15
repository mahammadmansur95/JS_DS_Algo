class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }

    push(ele){
        this.items[this.count] = ele;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty(){
        return this.count === 0;
    }

    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    toStrinhg() {
        if(this.isEmpty()){
            return undefined;
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }

}

const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(10);
let poped = stack.pop();
let string = stack.toStrinhg();

console.log(stack,string);