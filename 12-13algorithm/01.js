/**
 * 面试题 02.08. 环路检测
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
      while (slow != cur) {
        slow = slow.next;
        cur = cur.next;
      }
      return cur;
    }
  }
  return null;
};
