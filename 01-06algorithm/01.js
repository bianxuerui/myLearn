/**
 * 215. 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
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
      while (cur > 0 && this.arr[cur] < this.arr[parent]) {
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
      (childl < this.size && this.arr[childl] < this.arr[cur]) ||
      (childr < this.size && this.arr[childr] < this.arr[cur])
    ) {
      if (childr < this.size && this.arr[childr] < this.arr[childl]) {
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
var findKthLargest = function (nums, k) {
  const heap = new MinHeap(k);

  for (let i = 0; i < nums.length; i++) {
    if (heap.size < k || nums[i] > heap.top()) heap.push(nums[i]);
  }

  console.log(heap.arr);
  return heap.arr[0];
};
