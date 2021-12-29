/**
 * 剑指 Offer 32 - II. 从上到下打印二叉树 II
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [root]; // [[3,9,20,null,null,15,7]]
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
    res.push(temp);
  }
  return res;
};
