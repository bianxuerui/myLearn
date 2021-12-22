/**
 * 剑指 Offer 18. 删除链表的节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head == null) return null;
  if (head.val == val) return head.next;
  head.next = deleteNode(head.next, val);
  return head;
};
