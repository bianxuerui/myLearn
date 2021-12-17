/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // A B *
  // A B *
  // A B

  // A B C D
  // A B C
  // A B D
  // A B D

  // （max - 1）* (n + 1);

  let arr = new Array(26).fill(0);
  for (let i of tasks) {
    arr[i.charCodeAt() - "A".charCodeAt()]++;
  }

  let max = 0;
  for (let i = 0; i < 26; i++) {
    max = Math.max(max, arr[i]);
  }

  let res = (max - 1) * (n + 1);
  for (let i = 0; i < 26; i++) {
    if (arr[i] == max) {
      res++;
    }
  }
  return Math.max(res, tasks.length);
};
