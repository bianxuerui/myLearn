/**
 * 1046. 最后一块石头的重量
 * @param {number[]} stones
 * @return {number}
 */
class BigHeight {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  push(val) {
    this.arr.push(val);
    this.size++;
    if (this.size > 1) {
      let cur = this.size - 1,
        parent = (cur - 1) >> 1;
      while (cur > 0 && this.arr[cur] > this.arr[parent]) {
        [this.arr[cur], this.arr[parent]] = [this.arr[parent], this.arr[cur]];
        (cur = parent), (parent = (cur - 1) >> 1);
      }
    }
  }

  pop() {
    if (this.size === 0) return false;
    if (this.size === 1) {
      this.size = 0;
      return this.arr.pop();
    }
    const res = this.arr[0];
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
        [this.arr[cur], this.arr[childr]] = [this.arr[childr], this.arr[cur]];
        cur = childr;
      } else {
        [this.arr[cur], this.arr[childl]] = [this.arr[childl], this.arr[cur]];
        cur = childl;
      }
      childl = cur * 2 + 1;
      childr = cur * 2 + 2;
    }
    return res;
  }
}
var lastStoneWeight = function (stones) {
  const heap = new BigHeight();

  for (let i = 0; i < stones.length; i++) {
    heap.push(stones[i]);
  }

  console.log(heap.arr);
  while (heap.size > 1) {
    const a1 = heap.pop(),
      a2 = heap.pop();

    if (a1 != a2) heap.push(a1 - a2);
  }
  return heap.arr[0] || 0;
};
