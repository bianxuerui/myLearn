/**
 * 973. 最接近原点的 K 个点
 * @param {number[][]} points
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
        [this.arr[cur], this.arr[childr]] = [this.arr[childr], this.arr[cur]];
        cur = childr;
      } else {
        [this.arr[cur], this.arr[childl]] = [this.arr[childl], this.arr[cur]];
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
  let val1 = arr1[0] * arr1[0] + arr1[1] * arr1[1];
  let val2 = arr2[0] * arr2[0] + arr2[1] * arr2[1];
  return val1 > val2;
}

var kClosest = function (points, k) {
  let heap = new BigHeap(k);

  for (let i = 0; i < points.length; i++) {
    if (heap.size < k || compare(heap.top(), points[i])) {
      heap.push(points[i]);
    }
  }

  // console.log(heap.arr);
  return heap.arr;
};
