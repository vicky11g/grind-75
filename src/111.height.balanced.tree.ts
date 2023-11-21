import { TreeNode } from './types/tree.node';

/* Given a binary tree, determine if it is 
  height-balanced
  A height-balanced binary tree is a binary tree in which the depth of the
 two subtrees of every node never differs by more than one.
*/

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

function getHeight(root: TreeNode) {
  if (!root) return 1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
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

const r = isBalanced(tree);
console.log(r);
