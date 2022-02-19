class LinkNode<T> {
  public next: LinkNode<T> | null;
  constructor(public data?: T) {
    this.next = null;
  }
}

type CommonType<T> = LinkNode<T> | null;

class CircularLinkedList<T> {
  public head: CommonType<T>;
  constructor() {
    this.head = null;
  }

  push(data: T): void {
    const newNode = new LinkNode<T>(data);
    let temp = this.head;

    newNode.next = this.head;

    if (temp !== null) {
      while (temp!.next !== this.head) temp = temp!.next;
      temp!.next = newNode;
    } else {
      newNode.next = newNode;
    }

    this.head = newNode;
  }

  deleteKey(key: T): void {
    let currNode = this.head;
    let prevNode: CommonType<T> = null;

    while (currNode) {
      if (currNode.data === key && currNode === this.head) {
        // case 1
        // head is the only element
        if (currNode.next === this.head) {
          currNode = null;
          this.head = null;
          return;
        }

        // case 2
        // more element in list
        else {
          while (currNode!.next !== this.head) currNode = currNode!.next;
          currNode!.next = this.head.next;
          this.head = this.head.next;
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

  getNodeCount(): void {
    let curr = this.head;
    let count = 1;

    while (curr!.next !== this.head) {
      count += 1;
      curr = curr!.next;
    }

    console.log(`Total ${count} nodes.`);
  }

  toCircularList(head: CommonType<T>): void {
    let start = head;

    while(head!.next !== null) head = head!.next;

    head.next = start;
  }

  printList(): void {
    let temp = this.head;

    if (temp !== null) {
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

list.deleteKey(10)
list.deleteKey(61)

list.printList();
list.getNodeCount();
