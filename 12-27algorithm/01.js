/**
 * 144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  function test(root) {
    if (root == null) return;
    res.push(root.val);
    test(root.left);
    test(root.right);
  }
  test(root);
  console.log(res);
  return res;
};
