/**
 * 基本计算器||
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  let stack = [];
  let len = s.length;
  let sign = "+";
  let num = 0;
  for (let i = 0; i < len; i++) {
    // 找出所有的数字
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + s[i].charCodeAt() - "0".charCodeAt();
    }
    // 找出里面的所有符号
    if (isNaN(Number(s[i])) || i === len - 1) {
      switch (sign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(parseInt(stack.pop() / num));
          break;
      }
      sign = s[i]; // 替换preSign 的值
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  console.log(ans);
  return ans;
};

calculate("6/3");
