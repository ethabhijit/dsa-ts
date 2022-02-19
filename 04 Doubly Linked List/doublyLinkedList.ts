class LinkedNode<T> {
  public next: LinkedNode<T> | null;
  public prev: LinkedNode<T> | null;
  constructor(public data: T) {
    this.next = null;
    this.prev = null;
  }
}

type CombineType<T> = LinkedNode<T> | null;

class DoublyLinkedList<T> {
  public head: CombineType<T>;
  constructor() {
    this.head = null;
  }

  push(data: T): void {
    const newNode = new LinkedNode<T>(data);

    newNode.next = this.head;

    if (this.head !== null) this.head.prev = newNode;

    this.head = newNode;
  }

  insertAt(prevNode: CombineType<T>, data: T): void {
    if (prevNode === null) {
      console.log("Previous node seems to be null");
      return;
    }

    const newNode = new LinkedNode<T>(data);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next !== null) {
      newNode.next.prev = newNode;
    }
  }

  append(data: T): void {
    const newNode = new LinkedNode<T>(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let last = this.head;

    while (last.next) last = last.next;

    last.next = newNode;
    newNode.prev = last;
    return;
  }

  printList(node: CombineType<T>): void {
    while(node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const list = new DoublyLinkedList<number>();

list.push(10)
list.push(73)
list.push(56)

list.append(35);
list.append(23);

list.printList(list.head);

