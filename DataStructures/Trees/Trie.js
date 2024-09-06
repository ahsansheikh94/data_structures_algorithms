class Node {
  constructor(value, isWord) {
    this.value = value;
    this.children = [];
    this.isWord = isWord;
  }
}

class Trie {
  constructor() {
    this.root = new Node({
      value: null,
      isWord: false,
    });
  }

  justInsert(wordArr, node) {
    let currentNode = node;
    wordArr.map((chr, index) => {
      const newNode = new Node(chr, index === wordArr.length - 1);
      currentNode.children.push(newNode);
      currentNode = newNode;
    });
  }

  insert(word) {
    const arr = word.split("");
    if (!this.root.children.length) {
      this.justInsert(arr, this.root);
      return this;
    }

    let currentNode = this.root;
    let currentPointer = 0;

    while (currentPointer < arr.length) {
      const chr = arr[currentPointer];
      const nodeExists = currentNode.children.find(
        (node) => node.value === chr
      );
      if (nodeExists) {
        currentNode = nodeExists;
        currentPointer++;
        if (currentPointer === arr.length - 1) {
          currentNode.isWord = true;
          return this;
        }
      } else {
        break;
      }
    }

    this.justInsert(arr.slice(currentPointer), currentNode);
    return this;
  }
  traverse(node) {
    let result = node.value;
    result += node.children?.length ? this.traverse(node.children[0]) : "";
    return result;
  }
  lookup(word) {
    let currentNode = this.root;
    let pointer = 0;
    let arr = word.split("");
    const result = [];

    while (pointer < arr.length) {
      const childExists = currentNode.children.find(
        (chr) => chr.value === arr[pointer]
      );
      if (childExists) {
        currentNode = childExists;
      } else {
        break;
      }
    }

    result.push(this.traverse(currentNode));
    console.log(result);
  }
}

const trie = new Trie();
trie.insert("Do");
trie.insert("Done");
trie.insert("Zebra");
console.log(JSON.stringify(trie.insert("Cat")));
trie.lookup("C");
