import { TreeNode } from "./types/tree.node";

/* 
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

const tree = new TreeNode(6);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(0);
tree.left.right = new TreeNode(4);
tree.left.right.left = new TreeNode(3);
tree.left.right.right = new TreeNode(5);
tree.right = new TreeNode(8);
tree.right.left = new TreeNode(7);
tree.right.right = new TreeNode(9);
console.log(invertTree(tree))
