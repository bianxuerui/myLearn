/**
 * 105. 从前序与中序遍历序列构造二叉树
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let node = new TreeNode(preorder[0]);

  let index = inorder.indexOf(preorder.shift());

  node.left = buildTree(preorder, inorder.slice(0, index));
  node.right = buildTree(preorder, inorder.slice(index + 1));

  return node;
};
