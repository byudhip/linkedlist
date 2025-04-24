"use strict";

// Node class representing an element in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class managing nodes
class LinkedList {
  constructor() {
    this.HEAD = null; // First node in the list
    this.TAIL = null; // Last node in the list
    this.SIZE = 0; // Number of nodes in the list
  }
  // Add node to the end of the list
  append(data) {
    let newNode = new Node(data);
    if (!this.HEAD) {
      // If list is empty, HEAD and TAIL both point to new node
      this.HEAD = newNode;
      this.TAIL = newNode;
    } else {
      // Otherwise, append to end and update TAIL
      this.TAIL.next = newNode;
      this.TAIL = newNode;
    }
    this.SIZE++;
    return this;
  }
  // Add node to the start of the list
  prepend(data) {
    let newNode = new Node(data);
    if (!this.HEAD) {
      // If list is empty, HEAD and TAIL both point to new node
      this.HEAD = newNode;
      this.TAIL = newNode;
      this.SIZE++;
    } else {
      // Otherwise, insert before current HEAD
      newNode.next = this.HEAD;
      this.HEAD = newNode;
    }
    this.SIZE++;
    return this;
  }
  // Return number of elements in list
  size() {
    return this.SIZE;
  }
  // Return HEAD node or null
  head() {
    return this.HEAD ? this.HEAD : null;
  }
  // Return TAIL node or null
  tail() {
    return this.TAIL ? this.TAIL : null;
  }
  // Return node at specified index
  at(index) {
    if (index < 0) return null;
    if (index === this.SIZE) return null;
    let count = 0;
    let node = this.HEAD;
    while (node) {
      if (count === index) return node;
      node = node.next;
      count++;
    }
    return null;
  }
  // Remove and return the last node in the list
  pop() {
    if (!this.HEAD) return null;
    if (!this.HEAD.next) {
      let removed = this.HEAD;
      this.HEAD = null;
      this.TAIL = null;
      this.SIZE--;
      return removed;
    }
    let secondLast = this.at(this.SIZE - 2);
    secondLast.next = null;
    let removed = this.TAIL;
    this.TAIL = secondLast;
    this.SIZE--;
    return removed;
  }
  // Check if a value exists in the list
  contains(data) {
    let node = this.HEAD;
    while (node) {
      if (node.data === data) return true;
      node = node.next;
    }
    return false;
  }
  // Find index of the node with specified value
  find(data) {
    let node = this.HEAD;
    let count = 0;
    while (node) {
      if (node.data === data) {
        return `"${data}" found at index ${count}`;
      }
      node = node.next;
      count++;
    }
    return "data not found";
  }
  // Return string representation of the list
  toStr() {
    let node = this.HEAD;
    let dataStr = "";
    while (node) {
      dataStr += `( ${node.data} ) -> `;
      node = node.next;
    }
    return (dataStr += "null");
  }
  // Insert node with data at specified index
  insertAt(data, index) {
    let nodeShiftedRight = this.at(index);
    let newNode = new Node(data);
    if (index < 0) return this;
    if (index > this.SIZE) return `Out of list bounds`;
    if (index === 0) {
      // Insert at the beginning
      this.prepend(data);
      return this;
    }
    if (index === this.SIZE) {
      // Insert at the end
      this.append(data);
      return this;
    }
    // Insert in the middle
    this.at(index - 1).next = newNode;
    newNode.next = nodeShiftedRight;
    this.SIZE++;
    return this;
  }
  // Remove node at specified index
  removeAt(index) {
    if (index < 0 || index >= this.SIZE) return null;
    if (index === 0) {
      // Remove head node
      this.HEAD = this.HEAD.next;
      this.SIZE--;
      if (this.SIZE === 0) this.TAIL = null;
      return this;
    }
    // Remove node in middle or end
    const prevNode = this.at(index - 1);
    const nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    if (index === this.SIZE - 1) this.TAIL = prevNode;
    this.SIZE--;
    return this;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("this is the linked list:\n", list);
console.log(list.toStr());
// console.log("this is list size:\n", list.size());
// console.log("this is list head:\n", list.head());
// console.log("this is list tail\n", list.tail());
// console.log("this is what list contains at index 2\n", list.at(2));
// console.log('does this list contains "cat"?\n', list.contains("cat"));
// console.log("where is 'giraffe'?\n", list.find("giraffe"));
// console.log("all list elements\n", list.toStr());
// console.log(`insert 'elephant' at index 4\n`, list.insertAt("elephant", 6));
// console.log("all list elements after elephant inserted\n", list.toStr());
// console.log("where is 'elephant'?\n", list.find("elephant"));
// console.log("Remove last element of list\n", list.pop());
// console.log(list.removeAt(0));
// console.log(list.toStr());
