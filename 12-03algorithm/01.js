/**
 * 142. 环形链表||
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == null) return null;
    if (fast == slow) {
      let cur = head;
      while (cur != slow) {
        cur = cur.next;
        slow = slow.next;
      }
      return cur;
    }
  }
  return null;
};
