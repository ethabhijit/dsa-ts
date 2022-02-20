class LinkNode<T> {
  public next: LinkNode<T> | null;
  constructor(public data?: T) {
    this.next = null;
  }
}

type CommonType<T> = LinkNode<T> | null;

class LinkedList<T> {
  public head: CommonType<T>;
  constructor() {
    this.head = null;
  }

  push(data: T): void {
    const newNode = new LinkNode<T>(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAt(prevNode: CommonType<T>, data: T): void {
    if (prevNode === null) {
      console.log("Previous node seems to be null");
    }

    const newNode = new LinkNode<T>(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  append(data: T): void {
    const newNode = new LinkNode<T>(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let last = this.head;

    while (last.next) last = last.next;

    last.next = newNode;
  }

  deleteKey(key: T): void {
    let temp = this.head;
    let prev: CommonType<T> = null;

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
    if (prev === null || temp === null) return;

    prev.next = temp.next;
    temp = null;
    return;
  }

  deleteTotalList(): void {
    let curr = this.head;

    while (curr !== null) {
      const next = curr.next;
      this.head = next;
      delete curr.data;
      curr = next;
    }
  }

  reverse(): void {
    let curr = this.head;
    let prev: CommonType<T> = null;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  printList(): void {
    let temp = this.head;

    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const list = new LinkedList<number>();

// list.push(5);
// list.push(6);
// list.push(61);
// list.push(10);

// list.deleteKey(10)
// list.deleteKey(61)

// list.printList();
// list.getNodeCount();
