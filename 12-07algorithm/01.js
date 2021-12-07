/**
 * 反转链表||
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }
  cur = pre.next;
  for (let i = left; i < right; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummy.next;
};
