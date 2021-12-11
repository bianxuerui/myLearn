/**
 * 设计循环双端队列
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k);
  this.head = 0;
  this.tail = k - 1;
  this.count = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  if (this.head == 0) {
    this.head = this.queue.length - 1;
    this.queue[this.head] = value;
  } else {
    this.head = this.head - 1;
    this.queue[this.head] = value;
  }
  this.count++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  if (this.tail == this.queue.length - 1) {
    this.tail = 0;
    this.queue[this.tail] = value;
  } else {
    this.tail = this.tail + 1;
    this.queue[this.tail] = value;
  }
  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  if (this.head == this.queue.length - 1) {
    this.head = 0;
  } else {
    this.head = this.head + 1;
  }
  this.count--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  if (this.tail == 0) {
    this.tail = this.queue.length - 1;
  } else {
    this.tail = this.tail - 1;
  }
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count == this.queue.length;
};
