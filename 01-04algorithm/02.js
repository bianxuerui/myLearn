/**
 * 剑指 Offer 40. 最小的k个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
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
      while (cur > 0 && this.arr[cur] > this.arr[parent]) {
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
      (childl < this.size && this.arr[childl] > this.arr[cur]) ||
      (childr < this.size && this.arr[childr] > this.arr[cur])
    ) {
      if (childl < this.size && this.arr[childl] < this.arr[childr]) {
        [this.arr[childr], this.arr[cur]] = [this.arr[cur], this.arr[childr]];
        cur = childr;
      } else {
        [this.arr[childl], this.arr[cur]] = [this.arr[cur], this.arr[childl]];
        cur = childl;
      }
      childr = cur * 2 + 2;
      childl = cur * 2 + 1;
    }
  }
  top() {
    return this.arr[0];
  }
}
var getLeastNumbers = function (arr, k) {
  if (k === 0) return [];

  const heap = new BigHeap(k);

  for (let i = 0; i < arr.length; i++) {
    if (heap.size < k || arr[i] < heap.top()) heap.push(arr[i]);
  }

  return heap.arr;
};
