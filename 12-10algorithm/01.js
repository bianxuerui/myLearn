/**
 * 设计循环队列
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k);
  this.length = k;
  this.head = -1;
  this.tail = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  if (this.head === -1 && this.tail === -1) {
    this.head += 1;
    this.tail += 1;
  } else {
    this.tail += 1;
    this.tail = this.tail % this.length;
  }
  this.queue[this.tail] = value;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }
  delete this.queue[this.head];
  this.head += 1;
  this.head = this.head % this.length;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  let res = true;
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i] !== undefined) {
      res = false;
      break;
    }
  }
  return res;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  let res = true;
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i] === undefined) {
      res = false;
      break;
    }
  }
  return res;
};
