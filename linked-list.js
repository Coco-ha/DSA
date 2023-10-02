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

    this.length++;

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

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("List is empty.");

    let current = this.head;
    let previousNode = null;
    while (current.next) {
      previousNode = current;
      current = current.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
    return current;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("List is empty.");
    let originalHead = this.head;
    this.head = this.head.next;
    this.length--;
    return originalHead;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0 ) throw new Error("Index is invalid.")
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
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0 ) throw new Error("Index is invalid.")

    // add value as a node
    let newNode = new Node(val);

    // special case if only one node
    if (idx === 0 && this.head === this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }

    // find the prior value and point it at new node
    let current = this.head;
    let previousNode = null;
    let counter = 0;

    while (counter !== idx) {
      counter++;
      previousNode = current;
      current = current.next;
    }

    previousNode.next = newNode;
    newNode.next = current.next
    if (this.tail === current) this.tail = newNode;
    if (this.head === current) this.head = newNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // find the current value at the index
    // keep track of value at prior index
    // point prior index at new value
    // point new value at current value

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
