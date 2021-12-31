/**
 * 107. 二叉树的层序遍历 II
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let queue = [root];
  let res = [];

  if (root == null) return [];

  while (queue.length) {
    let temp = [];
    for (let i = queue.length; i > 0; i--) {
      let n = queue.shift();
      temp.push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
    }
    res.unshift(temp);
  }
  return res;
};
