/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = [];
  function test(root) {
    if (root == null) return;
    res.push(root.val);
    test(root.left);
    test(root.right);
  }
  test(root);
  res.sort((a, b) => {
    return a - b;
  });
  return res[res.length - k];
};
