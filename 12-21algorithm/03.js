/**
 * 707. 设计链表（单向链表）
 */
var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    if (cur == null) break;
    cur = cur.next;
  }
  return cur ? cur.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = {
    val,
    next: this.head,
  };
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.head;
  if (cur == null) return (this.head = { val, next: null });
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = { val, next: null };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) return this.addAtHead(val);
  let cur = this.head;
  index--;
  while (index && cur.next) {
    cur = cur.next;
    index--;
  }
  if (index > 0) return;
  if (cur == null) {
    cur = { val, next: null };
  } else {
    let temp = cur.next;
    cur.next = { val, next: temp };
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.head,
    pre = null;
  if (cur == null) return;
  if (index == 0) return (this.head = cur.next);
  while (index && cur.next) {
    index--;
    pre = cur;
    cur = cur.next;
  }
  if (index > 0) return;
  pre.next = cur.next;
};
