class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
      this.length++;
      return;
    }

    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;

    return temp;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
console.log(myStack);
