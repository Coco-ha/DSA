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
    // if (!this.head) throw new Error("List is empty.");

    // let current = this.head;
    // let previousNode = null;
    // while (current.next) {
    //   previousNode = current;
    //   current = current.next;
    // }
    // this.tail = previousNode;
    // this.tail.next = null;
    // this.length--;
    // return current.val;
    return this.removeAt(this.length-1)
  }

  /** shift(): return & remove first item. */

  shift() {
    // if (!this.head) throw new Error("List is empty.");
    // let originalHead = this.head;
    // this.head = this.head.next;
    // this.length--;
    // return originalHead.val;
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid.");
    let current = this.head;
    let result = this.head;
    let counter = 0;

    while (counter !== idx) {
      counter++;
      current = current.next;
      result = current;
    }
    return result.val;  //next on null value could be undefined
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid.");

    // add value as a node
    // let newNode = new Node(val);

    // special case if only one node
    if (idx === 0 ) {
      this.head.val = val;
    }
    // find the prior value and point it at new node
    let current = this.head;
    // let previousNode = null;
    let counter = 0;

    while (counter !== idx) {
      counter++;
      // previousNode = current;
      current = current.next;
    }
    current.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid.");
    // find the current value at the index
    let newNode = new Node(val);

    let current = this.head
    if (idx === 0) {
      current = newNode;
      current.next = this.head;
      this.head = current;
      this.length++;
      return undefined;
    }

    let previousNode = null;
    let counter = 0;

    while (counter !== idx) {
      counter++;
      previousNode = current;
      current = current.next;
    }

    previousNode.next = newNode;
    newNode.next = current;
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head) throw new Error("List is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index is invalid.");

    let current = this.head;
    let previousNode = null;
    let counter = 0;

    if (idx === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--
        return current.val;
      }
      this.head = current.next;
      this.length--;
      return current.val;
    }

    if (idx === this.length - 1) {
      while (counter !== idx) {
        counter++; //3
        previousNode = current; //c
        current = current.next;// d
      }
      previousNode.next = null;
      this.tail = previousNode; // tail = c
      this.length--;
      return current.val;
    }

    while (counter !== idx) {
      counter++; //2
      previousNode = current; //b
      current = current.next; //c
    }

    previousNode.next = current.next;
    this.length--;
    return current.val;

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
