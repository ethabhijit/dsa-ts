class LinkNode<T> {
  public next: LinkNode<T> | null;

  constructor(public data: T) {
    this.next = null;
  }
}

type CombineType<T> = LinkNode<T> | null;

class CircularLinkedList<T> {
  public head: CombineType<T>;

  constructor() {
    this.head = null;
  }

  push(data: T) {
    const newNode = new LinkNode(data);
    let temp = this.head;

    newNode.next = this.head;

    if (this.head !== null) {
      while (temp?.next !== this.head) {
        temp = temp!.next;
      }
      temp.next = newNode;
    } else {
      newNode.next = newNode;
    }

    this.head = newNode;
  }

  toCircular(head: CombineType<T>) {
    let start = head;

    while (head!.next !== null) head = head!.next;

    head.next = start;
    return;
  }

  deleteNode(key: T) {
    let currNode = this.head;
    let prevNode: CombineType<T> = null;

    while (currNode) {
      if (currNode.data === key && currNode === this.head) {
        // case 1
        // head is the only element in the list
        if (currNode.next === this.head) {
          currNode = null;
          this.head = null;
          return;
        }
        // case 2
        // There are more elements in c list
        else {
          // Traverse & update head; delete head
          while (currNode!.next !== this.head) currNode = currNode!.next;
          currNode!.next = this.head.next;
          this.head = this.head.next;
          currNode = null;
          return;
        }
      } else if (currNode.data === key) {
        prevNode!.next = currNode!.next;
        currNode = null;
        return;
      } else {
        if (currNode.next === this.head) break;
      }

      prevNode = currNode;
      currNode = currNode.next;
    }
  }

  getNodeCount() {
    let curr = this.head;
    let count = 1;

    while (curr!.next !== this.head) {
      count += 1;
      curr = curr!.next;
    }

    console.log(`Total node ${count}`);
  }

  printList() {
    let temp = this.head;

    if (this.head !== null) {
      do {
        console.log(temp!.data);
        temp = temp!.next;
      } while (temp !== this.head);
    }
  }
}

const list = new CircularLinkedList<number>();

list.push(5);
list.push(6);
list.push(61);
list.push(10);
list.push(10);

list.printList();
list.getNodeCount();
