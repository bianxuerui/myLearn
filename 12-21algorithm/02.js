/**
 * 1249. 移除无效的括号
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let res = s.split("");
  for (let i = 0; i < res.length; i++) {
    if (res[i] == "(") stack.push(i);
    if (res[i] == ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        res[i] = "";
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    res[stack[i]] = "";
  }
  return res.join("");
};
