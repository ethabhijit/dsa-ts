class LinkNode<T> {
  public next: LinkNode<T> | null;
  constructor(public data?: T) {
    this.next = null;
  }
}

class LinkedList<T> {
  public head: LinkNode<T> | null;
  constructor() {
    this.head = null;
  }

  push(value: T) {
    const newNode = new LinkNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAt(prevNode: LinkNode<T> | null, value: T) {
    if (prevNode === null) {
      console.log("Previous node seems to be null!");
      return;
    }
    const newNode = new LinkNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  append(value: T) {
    const newNode = new LinkNode(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let last = this.head;

    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  getNodeCount(node: LinkNode<T> | null): number {
    if (!node) return 0;
    else return 1 + this.getNodeCount(node.next);
  }

  getCount(): number {
    return this.getNodeCount(this.head);
  }

  deleteNode(key: T) {
    let prev: LinkNode<T> | null = null;
    let temp = this.head;

    // case 1
    if (temp !== null) {
      if (temp.data === key) {
        this.head = temp.next;
        temp = null;
        return;
      }
    }

    // case 2
    while (temp !== null) {
      if (temp.data === key) break;
      prev = temp;
      temp = temp.next;
    }

    // case 3
    if (temp === null || prev === null) return;

    prev.next = temp.next;
    temp = null;
  }

  deleteTotalList() {
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      this.head = next;
      delete curr.data;
      curr = next;
    }
  }

  reverseList() {
    let prev: LinkNode<T> | null = null;
    let curr = this.head;

    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const list = new LinkedList<number>();

list.push(2);
list.insertAt(list.head, 4);
list.append(5);
list.push(1);

list.deleteNode(5);

// list.reverseList()

// list.deleteTotalList();

list.printList();
console.log("Total items: " + list.getCount());
