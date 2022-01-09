/**
 * 264. 丑数 II
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let arr = [1];

  let cur2 = 0,
    cur3 = 0,
    cur5 = 0;
  let num2 = 0,
    num3 = 0,
    num5 = 0;

  for (let i = 1; i < n; i++) {
    num2 = arr[cur2] * 2;
    num3 = arr[cur3] * 3;
    num5 = arr[cur5] * 5;

    let min = Math.min(num2, num3, num5);

    arr.push(min);

    if (min == num2) cur2++;
    if (min == num3) cur3++;
    if (min == num5) cur5++;
  }
  // console.log(arr);
  return arr[n - 1];
};
