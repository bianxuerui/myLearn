/**
 * 1021. 删除最外层的括号
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" && count++ > 0) res += "(";
    if (s[i] === ")" && count-- > 1) res += ")";
  }
  return res;
};
