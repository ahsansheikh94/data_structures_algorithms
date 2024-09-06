// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value,
      next: null,
      previous: null,
    };

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value,
      next: this.head,
      previous: null,
    };
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
  traverseToIndex(index) {
    let targetNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      targetNode = targetNode.next;
      currentIndex++;
    }
    return targetNode;
  }
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    let targetNode = this.traverseToIndex(index);
    let previousNode = this.traverseToIndex(index - 1);

    const newNode = {
      value,
      next: targetNode,
      previous: previousNode,
    };

    previousNode.next = newNode;
    targetNode.previous = newNode;
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      const follower = this.head.next;
      follower.previous = null;
      this.head = follower;
      return;
    }
    if (index > this.length - 1) {
      index = this.length - 1;
    }

    let previousNode = this.traverseToIndex(index - 1);
    let nextNode = this.traverseToIndex(index + 1);

    previousNode.next = nextNode;
    nextNode.previous = previousNode;
  }
}

let myLinkedList = new LinkedList(5);
myLinkedList.append(16);
myLinkedList.prepend(10);
//myLinkedList.insert(2, 99);
//myLinkedList.remove(3);
console.log(myLinkedList.printList());
