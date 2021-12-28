/**
 * 589. N 叉树的前序遍历
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  function test(root) {
    if (root == null) return;

    res.push(root.val);
    for (let i = 0; i < root.children.length; i++) {
      test(root.children[i]);
    }
    return;
  }
  test(root);
  console.log(res);
  return res;
};
