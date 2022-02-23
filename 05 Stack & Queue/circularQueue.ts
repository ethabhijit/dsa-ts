//  34, 45, 46, 67, 78, 89, 23, 34
//  0,  1,  2,  3,  4,  5,  6,  7
//      R   F
//
// (this.rear + 1) % this.size == this.front
// 2 % 8 = 2
// 2 === 2

interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
}

class CircularQueue<T> implements IQueue<T> {
  private front = -1;
  private rear = -1;
  private storage: T[] = [];

  constructor(private capacity: number) {}

  enqueue(item: T): void {
    if ((this.rear + 1) % this.capacity === this.front) {
      console.log("Queue is full");
      return;
    } else if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
      this.storage[this.rear] = item;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.storage[this.rear] = item;
    }
  }

  dequeue(): T | undefined {
    if (this.front === -1) {
      console.log("Queue is already empty");
      return;
    } else if (this.front === this.rear) {
      const value = this.storage[this.front];
      this.front = -1;
      this.rear = -1;
      return value;
    } else {
      const value = this.storage[this.front];
      this.front = (this.front + 1) % this.capacity;
      return value;
    }
  }
}
