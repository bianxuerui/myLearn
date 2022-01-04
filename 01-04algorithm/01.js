/**
 * 110. 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function test(root) {
    if (!root) return 0;

    let leftTree = test(root.left);
    if (leftTree === -1) {
      return -1;
    }

    let rightTree = test(root.right);
    if (rightTree === -1) {
      return -1;
    }

    if (Math.abs(leftTree - rightTree) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftTree, rightTree);
    }
  }
  return test(root) === -1 ? false : true;
};
