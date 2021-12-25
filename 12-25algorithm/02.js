/**
 * 222. 完全二叉树的节点个数
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  /** ### 1 **/
  // let res = 0;
  // function getHeight(root) {
  //     if (root == null) return;
  //     res++;
  //     getHeight(root.left);
  //     getHeight(root.right);
  // }
  // getHeight(root);
  // return res;

  /** ### 2 **/
  // if (root == null) return 0;
  // return countNodes(root.left) + countNodes(root.right) + 1;

  /** ### 3 **/
  let l = root,
    r = root;
  let hl = 0,
    hr = 0;
  while (l != null) {
    l = l.left;
    hl++;
  }
  while (r != null) {
    r = r.right;
    hr++;
  }
  if (hl == hr) {
    return Math.pow(2, hl) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
