/**
 * 面试题 04.05. 合法二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let cur = null,
    res = true;
  function test(node) {
    if (!node) return;
    test(node.left);
    if (cur === null) {
      cur = node.val;
    } else {
      if (cur < node.val) {
        cur = node.val;
      } else {
        res = false;
        return;
      }
    }
    test(node.right);
  }
  test(root);
  return res;
};
