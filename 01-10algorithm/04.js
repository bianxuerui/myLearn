/**
 * 199. 二叉树的右视图
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [],
    queue = [];
  queue.push(root);

  while (queue.length && root) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      if (len === 0) {
        res.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return res;
};
