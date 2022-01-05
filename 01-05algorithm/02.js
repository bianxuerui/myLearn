/**
 * 373. 查找和最小的K对数字
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
class BigHeap {
  constructor(k) {
    this.arr = [];
    this.size = 0;
    this.max = k;
  }

  push(val) {
    this.arr.push(val);
    this.size++;
    if (this.size > 1) {
      let cur = this.size - 1,
        parent = (cur - 1) >> 1;
      while (cur > 0 && compare(this.arr[cur], this.arr[parent])) {
        [this.arr[cur], this.arr[parent]] = [this.arr[parent], this.arr[cur]];
        cur = parent;
        parent = (cur - 1) >> 1;
      }
    }
    if (this.size > this.max) this.pop();
  }

  pop() {
    this.arr[0] = this.arr.pop();
    this.size--;
    let cur = 0,
      childl = 1,
      childr = 2;
    while (
      (childl < this.size && compare(this.arr[childl], this.arr[cur])) ||
      (childr < this.size && compare(this.arr[childr], this.arr[cur]))
    ) {
      if (childr < this.size && compare(this.arr[childr], this.arr[childl])) {
        [this.arr[childr], this.arr[cur]] = [this.arr[cur], this.arr[childr]];
        cur = childr;
      } else {
        [this.arr[childl], this.arr[cur]] = [this.arr[cur], this.arr[childl]];
        cur = childl;
      }
      childl = cur * 2 + 1;
      childr = cur * 2 + 2;
    }
  }

  top() {
    return this.arr[0];
  }
}
function compare(arr1, arr2) {
  return arr1[0] + arr1[1] > arr2[0] + arr2[1];
}
var kSmallestPairs = function (nums1, nums2, k) {
  const heap = new BigHeap(k);

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let temp = [nums1[i], nums2[j]];
      if (heap.size < k || compare(heap.top(), temp)) {
        heap.push(temp);
      } else {
        break;
      }
    }
  }

  return heap.arr;
};
