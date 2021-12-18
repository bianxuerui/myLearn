/**
 * 682. 棒球比赛
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "+":
        res.push(Number(res[res.length - 1]) + Number(res[res.length - 2]));
        break;
      case "D":
        res.push(Number(res[res.length - 1]) * 2);
        break;
      case "C":
        res.pop();
        break;
      default:
        res.push(Number(ops[i]));
        break;
    }
  }
  return res.reduce((i, j) => i + j);
};
