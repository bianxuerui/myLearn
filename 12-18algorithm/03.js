/**
 * 844. 比较含退格的字符串
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function test(val) {
    let res = [];
    for (let i = 0; i < val.length; i++) {
      if (val[i] === "#") {
        res.pop();
      } else {
        res.push(val[i]);
      }
    }
    return res;
  }
  return test(s).toString() === test(t).toString();
};
