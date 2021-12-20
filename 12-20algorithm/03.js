/**
 * 445. 两数相加 II
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }

  let ten = 0;
  // [5]
  // [5]
  // [0]
  // [1, 0]
  let res = null;
  while (stack1.length || stack2.length || ten != 0) {
    const s1 = stack1.length ? stack1.pop() : 0;
    const s2 = stack2.length ? stack2.pop() : 0;
    let val = s1 + s2 + ten;
    ten = parseInt(val / 10);
    val = val % 10;

    let curNodeList = new ListNode(val);
    curNodeList.next = res;
    res = curNodeList;
  }
  return res;
};
