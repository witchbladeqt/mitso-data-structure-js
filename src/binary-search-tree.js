import { Node } from "../extensions/list-tree.js";

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
export default class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);

    if (!this.treeRoot) {
      this.treeRoot = node;
      return;
    }

    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    let successor = node.right;
    while (successor.left) {
      successor = successor.left;
    }

    node.data = successor.data;
    node.right = this.removeNode(node.right, successor.data);
    return node;
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let current = this.treeRoot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let current = this.treeRoot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}
