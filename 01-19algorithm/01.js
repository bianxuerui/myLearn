/**
 * 200. 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let x = grid[0].length,
    y = grid.length;
  let res = 0;
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (grid[i][j] === "1") {
        res++;
        handle(i, j);
      }
    }
  }
  function handle(i, j) {
    if (i < 0 || i >= y || j < 0 || j >= x || grid[i][j] === "0") return;
    grid[i][j] = "0";
    handle(i + 1, j);
    handle(i - 1, j);
    handle(i, j + 1);
    handle(i, j - 1);
  }
  return res;
};
