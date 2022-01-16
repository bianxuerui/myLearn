/**
 * 451. 根据字符出现频率排序
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let res = "";
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  for (let [val, times] of arr) {
    res += val.repeat(times);
  }
  return res;
};
