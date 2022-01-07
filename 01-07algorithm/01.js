/**
 * 703. 数据流中的第 K 大元素
 * @param {number} k
 * @param {number[]} nums
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
        (cur = parent), (parent = (cur - 1) >> 1);
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
      if (childl < this.size && this.arr[childl] > this.arr[childr]) {
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
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap(k);
  for (let i = 0; i < nums.length; i++) {
    if (this.heap.size < k || this.heap.top() < nums[i])
      this.heap.push(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.size < this.k || this.heap.top() < val) this.heap.push(val);
  console.log(this.heap.arr);
  return this.heap.arr[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
