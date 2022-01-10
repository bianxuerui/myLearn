/**
 * 230. 二叉搜索树中第K小的元素
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let arr = [];
  function test(node) {
    if (!node) return;
    arr.push(node.val);
    test(node.left);
    test(node.right);
  }
  test(root);
  arr.sort((a, b) => a - b);
  return arr[k - 1];
};
