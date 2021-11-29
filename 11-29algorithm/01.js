/**
 * 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = [];

  let rec = function (root) {
    if (root == null) return;
    rec(root.left);
    rec(root.right);
    res.push(root.val);
  };

  rec(root);
  return res;
};
