//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let temp = current;
    while (current.next) {
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }

  shift() {
    const node = this.head.val;
    this.head = this.head.next;
    this.length--;
    return node;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
    }
    this.length++;
    return this;
  }

  delete(val) {
    if (this.head == null) return;
    
    if (this.head.val === val) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) this.tail = null; // List becomes empty
      return;
    }

    let current = this.head;
    let previous = null;

    while (current != null && current.val !== val) {
      previous = current;
      current = current.next;
    }

    if (current == null) return;

    previous.next = current.next;
    if (current === this.tail) this.tail = previous;
    this.length--;
    
  }

  count() {
    return this.length;
  }
}
