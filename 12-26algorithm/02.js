/**
 * 剑指 Offer 26. 树的子结构
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false;

  return test(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);

  function test(A, B) {
    if (!B) return true;
    if (!A) return false;

    return A.val == B.val && test(A.left, B.left) && test(A.right, B.right);
  }
};
