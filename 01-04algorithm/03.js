/**
 * 1046. 最后一块石头的重量
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let arr = stones.sort((a, b) => {
    return a - b;
  });

  if (arr.length > 1) {
    let res = arr.pop() - arr.pop();

    if (res) arr.push(res);

    return lastStoneWeight(arr);
  }
  return arr[0] || 0;
};
