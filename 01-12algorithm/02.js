/**
 * 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
