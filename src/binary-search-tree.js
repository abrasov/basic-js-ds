const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addData(this.treeRoot, data);
    function addData(node, value) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === value) {
        return node;
      }
      if (node.data > value) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchData(this.treeRoot, data);
    function searchData(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      if (node.data > value) {
        return searchData(node.left, value);
      } else {
        return searchData(node.right, value);
      }
    }
  }

  find(data) {
    return find(this.treeRoot, data);
    function find(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (node.data > value) {
        return find(node.left, value);
      } else {
        return find(node.right, value);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};