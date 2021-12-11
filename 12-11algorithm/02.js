/**
 * 设计前中后队列
 */
function NodeList(val, next) {
  this.val = val;
  this.next = next;
}

var FrontMiddleBackQueue = function () {
  this.head = new NodeList(-1);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  let p = this.head.next;
  this.head.next = new NodeList(val, p);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let slow = this.head;
  let fast = this.head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let p = slow.next;
  slow.next = new NodeList(val, p);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  let p = this.head;
  while (p.next) {
    p = p.next;
  }
  p.next = new NodeList(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  let p = this.head;
  if (p.next == null) return -1;
  let q = p.next;
  p.next = q.next;
  return q.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  let slow = this.head;
  let fast = this.head.next;
  if (fast == null) return -1;
  while (fast && fast.next) {
    fast = fast.next.next;
    if (fast) {
      slow = slow.next;
    }
  }
  let q = slow.next;
  slow.next = q.next;
  return q.val;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  let p = this.head;
  if (p.next == null) return p.val;
  while (p.next && p.next.next) {
    p = p.next;
  }
  let q = p.next;
  p.next = null;
  return q.val;
};
