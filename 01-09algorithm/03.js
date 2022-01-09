/**
 * 313. 超级丑数
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  let arr = new Array(n).fill(1);

  let cur = new Array(primes.length).fill(0);

  let nums = [...primes];

  for (let i = 1; i < n; i++) {
    let min = Math.min(...nums);

    arr[i] = min;

    for (let j = 0; j < primes.length; j++) {
      if (min == nums[j]) {
        cur[j]++;
        nums[j] = arr[cur[j]] * primes[j];
      }
    }
  }
  // console.log(arr);
  return arr[n - 1];
};
