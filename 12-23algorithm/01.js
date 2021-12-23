/**
 * 剑指 Offer 10- I. 斐波那契数列
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 0 1 1 2 3 5 8 13
  let n1 = 0,
    n2 = 1,
    sum;
  for (let i = 0; i < n; i++) {
    sum = (n1 + n2) % 1000000007;
    n1 = n2;
    n2 = sum;
  }
  return n1;
};
