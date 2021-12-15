/**
 * 859. 亲密字符串
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length != goal.length) return false;
  if (s == goal) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s[i].charCodeAt() - "a".charCodeAt()]++;
      if (count[s[i].charCodeAt() - "a".charCodeAt()] > 1) {
        return true;
      }
    }
    return false;
  } else {
    let first = "",
      second = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] != goal[i]) {
        if (first === "") {
          first = i;
        } else if (second === "") {
          second = i;
        } else {
          return false;
        }
      }
    }
    return (
      second != "" && s[first] === goal[second] && s[second] === goal[first]
    );
  }
};
