/**
 * 23. 合并K个升序链表
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/**
 * =======
 * 1.暴力破解
 * =======
 */
var mergeKLists = function (lists) {
  // 把节点的值合并成一个数组
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      arr.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  // 数组排序
  arr.sort((a, b) => a - b);
  //以节点的形式返回链表
  let dummy = new ListNode(0);
  let cur = dummy;
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return dummy.next;
};

/**
 * ====
 * 2.分治
 * ====
 */
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);

  function merge(lists, begin, end) {
    if (begin == end) return lists[begin];
    if (begin > end) return null;

    let mid = (begin + end) >> 1;
    let l1 = merge(lists, begin, mid);
    let l2 = merge(lists, mid + 1, end);
    return mergeTwoLists(l1, l2);
  }

  function mergeTwoLists(l1, l2) {
    if (l1 == null || l2 == null) {
      return l1 != null ? l1 : l2;
    }
    let dummy = new ListNode(0);
    let cur = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 != null ? l1 : l2;
    return dummy.next;
  }
};
