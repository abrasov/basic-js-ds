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

  remove(data) {
    return remove(this.treeRoot, data);
    function remove(node, value) {
      if (!node) {
        return null;
      }
      if (node.data > value) {
        node.left = remove(node.left, value);
        return node;
      } else if(node.data < value){
        node.right = remove(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = remove(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};