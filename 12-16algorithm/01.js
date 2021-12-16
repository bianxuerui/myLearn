/**
 * 969.煎饼排序
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  // 3 2 4 1
  // 3 => 4 2 3 1
  // 4 => 1 3 2 4
  // 2 => 3 1 2 4
  // 3 => 2 1 3 4
  // ...
  let res = [];
  sort(arr, arr.length);
  return res;
  function sort(arr, n) {
    if (n === 1) return;
    let maxNum = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
        maxIndex = i;
      }
    }

    reverse(arr, 0, maxIndex);
    res.push(maxIndex + 1);
    reverse(arr, 0, n - 1);
    res.push(n);
    sort(arr, n - 1);
  }
  function reverse(arr, i, j) {
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
};
