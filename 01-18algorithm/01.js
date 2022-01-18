/**
 * 547. 省份数量
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let len = isConnected.length;
  let res = 0;
  let visited = new Set();

  for (let i = 0; i < len; i++) {
    if (!visited.has(i)) {
      res++;
      handle(i);
    }
  }

  function handle(i) {
    for (let j = 0; j < len; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.add(j);
        handle(j);
      }
    }
  }

  return res;
};
