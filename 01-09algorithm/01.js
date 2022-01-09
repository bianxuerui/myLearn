/**
 * 1753. 移除石子的最大得分
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let arr = [a, b, c],
    times = 0;

  arr.sort((a, b) => b - a);

  while (arr[1] > 0) {
    arr[0]--;
    arr[1]--;
    arr.sort((a, b) => b - a);
    times++;
  }
  // console.log(times);
  return times;
};
