/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("No Nodes to pop");

    let current = this.head;
    let previousNode = null;
    while (current.next) {
      previousNode = current;
      current = current.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    return current;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("No Nodes to shift");
    let originalHead = this.head;
    this.head = this.head.next;
    return originalHead;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("Index is invalid");
    // if (idx === 0) return this.head;
    let current = this.head;
    let result = this.head;
    let counter = 0;

    while (counter !== idx) {
      counter++;
      current = current.next;
      result = current;
    }
    return result;  //next on null value could be undefined 
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
