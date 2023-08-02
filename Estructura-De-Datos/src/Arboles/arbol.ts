class Tree {
  left: Tree | null;
  right: Tree | null;
  value: any;

  constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const root: Tree = new Tree(7);
const node1: Tree = new Tree(5);
const node2: Tree = new Tree(2);
const node3: Tree = new Tree(6);
const node4: Tree = new Tree(9);
const node5: Tree = new Tree(8);

root.left = node1;
root.right = node4;

node1.left = node2;
node1.right = node3;

node4.left = node5;

function inorder(node: any) {
  if (node === null) {
    return;
  }
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}

function preorder(node: any) {
  if (node === null) {
    return;
  }
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}

function postorder(node: any) {
  if (node === null) {
    return;
  }
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}

function counter(node: any): any {
  if (node === null) {
    return 0;
  }
  return 1 + counter(node.left) + counter(node.right);
}

function findMinValue(node: any): any {
  if (node === null) {
    return null;
  }
  let minValue = node.value;
  while (node.left !== null) {
    minValue = node.left.value;
    node = node.left;
  }
  return minValue;
}

function findMaxValue(node: any): any {
  if (node === null) {
    return null;
  }
  let maxValue = node.value;
  while (node.right !== null) {
    maxValue = node.right.value;
    node = node.right;
  }
  return maxValue;
}
