/**
 * 331.验证二叉树的前序序列化
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let len = preorder.length;
  let num = 0;
  let count = 1;
  while (num < len) {
    if (!count) return false;
    if (preorder[num] === ",") {
      num++;
    } else if (preorder[num] === "#") {
      count--;
      num++;
    } else {
      while (num < len && preorder[num] !== ",") {
        num++;
      }
      count++;
      num++;
    }
  }
  return !count;
};
