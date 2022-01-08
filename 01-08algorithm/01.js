/**
 * 面试题 17.20. 连续中值（暴力破解）
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num || num === 0) {
    this.arr.push(num);
  }
  this.arr.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.arr.length % 2 === 0) {
    return (
      (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2
    );
  } else {
    return this.arr[Math.floor(this.arr.length / 2)];
  }
};

/**
 * 面试题 17.20. 连续中值（二分插入）
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let len = this.arr.length;
  if (len === 0 || num <= this.arr[0]) this.arr.unshift(num);
  else if (num >= this.arr[len - 1]) this.arr.push(num);
  else {
    let l = 0,
      r = len - 1;
    while (l < r) {
      let mid = (l + r) >> 1;
      if (this.arr[mid] < num) l = mid + 1;
      else r = mid;
    }
    this.arr.splice(l, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.arr.length;
  if (len % 2) return this.arr[len >> 1];
  else return (this.arr[(len >> 1) - 1] + this.arr[len >> 1]) / 2;
};
