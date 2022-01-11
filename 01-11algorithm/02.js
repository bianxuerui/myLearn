/**
 * 101. 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function test(node1, node2) {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null || node1.val != node2.val)
      return false;

    return test(node1.left, node2.right) && test(node1.right, node2.left);
  }
  return test(root.left, root.right);
};
