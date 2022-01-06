/**
 * 692. 前K个高频单词
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
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
      while (cur > 0 && compare(this.arr[cur], this.arr[parent])) {
        [this.arr[cur], this.arr[parent]] = [this.arr[parent], this.arr[cur]];
        cur = parent;
        parent = (cur - 1) >> 1;
      }
    }
    if (this.size > this.max) this.pop();
  }

  pop() {
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
    return res;
  }

  top() {
    return this.arr[0];
  }
}

function compare(arr1, arr2) {
  // ['XXX', 1]
  if (arr1[1] === arr2[1]) return arr1[0] > arr2[0];
  return arr1[1] < arr2[1];
}
var topKFrequent = function (words, k) {
  const map = new Map();
  for (let item of words) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  const heap = new MinHeap(k);
  map.forEach((item, times) => {
    let value = [times, item];
    if (heap.size < k || compare(heap.top(), value)) {
      heap.push(value);
    }
  });
  console.log(heap.arr);
  let res = [];
  // [['a', 1], ['b', 2], ['c', 3]]
  while (heap.size) {
    res.unshift(heap.pop()[0]);
  }
  return res;
};
