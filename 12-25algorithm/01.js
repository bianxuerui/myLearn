/**
 * 779. 第K个语法符号
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  // 第一行: 0
  // 第二行: 01
  // 第三行: 0110
  // 第四行: 01101001

  if (n === 1) return 0;

  let len = Math.pow(2, n - 1);

  if (k > len / 2) {
    //当前的这个k如果大于当前行一半的长度的时候，我们就取一个相反的值
    let res = kthGrammar(n - 1, k - len / 2);
    return res === 0 ? 1 : 0;
  } else {
    //当前行k小于当前行一半的长度，我们就取上一行改位置的值就可以了
    return kthGrammar(n - 1, k);
  }
};
