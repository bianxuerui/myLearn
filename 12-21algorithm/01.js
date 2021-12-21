/**
 * 143. 重排链表
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let res = [];
  let p;
  while (head) {
    p = head.next;
    head.next = null;
    res.push(head);
    head = p;
  }

  let [left, right] = [0, res.length - 1];
  while (left < right) {
    res[left].next = res[right];
    if (left + 1 != right) res[right].next = res[left + 1];
    left++;
    right--;
  }
  return res;
};
