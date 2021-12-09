/**
 * 86.分隔链表
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode(0, head);
  let right = new ListNode(0, head);
  let tempLeft = left;
  let tempRight = right;

  let p = head;
  while (p) {
    if (p.val < x) {
      left.next = p;
      left = left.next;
    } else {
      right.next = p;
      right = right.next;
    }
    p = p.next;
  }
  right.next = null;
  left.next = tempRight.next;
  return tempLeft.next;
};
