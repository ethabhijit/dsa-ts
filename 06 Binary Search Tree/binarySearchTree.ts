type CombineType<T> = BNode<T> | null;

class BNode<T> {
  public left: CombineType<T>;
  public right: CombineType<T>;

  constructor(public key: T) {
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  constructor(public root: CombineType<T> = null) {}

  get_root(): CombineType<T> {
    return this.root;
  }

  insert(key: T) {
    if (this.root === null) {
      this.root = new BNode(key);
    } else {
      this.insert_helper(this.root, key);
    }
  }

  insert_helper(this_node: BNode<T>, key: T) {
    if (this_node.key > key) {
      if (this_node.left === null) {
        this_node.left = new BNode(key);
      } else {
        this.insert_helper(this_node.left, key);
      }
    } else {
      if (this_node.right === null) {
        this_node.right = new BNode(key);
      } else {
        this.insert_helper(this_node.right, key);
      }
    }
  }
}
