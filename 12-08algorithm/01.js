/**
 * 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  if (head == null || head.next == null) {
    return head;
  }
  while (head && head.next) {
    if (head.val == head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return dummy.next;
};
