/**
 * 124. 二叉树中的最大路径和
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  function test(root) {
    if (root === null) return 0;

    let left = test(root.left),
      right = test(root.right);

    max = Math.max(max, root.val + left + right);

    let outPut = root.val + Math.max(left, right);
    return outPut > 0 ? outPut : 0;
  }
  test(root);
  return max;
};
