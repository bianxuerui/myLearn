/**
 * 100. 相同的树
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let arr1 = [],
    arr2 = [];

  function test1(node) {
    if (!node) {
      arr1.push(null);
      return;
    }
    arr1.push(node.val);
    test1(node.left);
    test1(node.right);
  }
  function test2(node) {
    if (!node) {
      arr2.push(null);
      return;
    }
    arr2.push(node.val);
    test2(node.left);
    test2(node.right);
  }
  test1(p);
  test2(q);
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
