/**
 * 725. 分隔链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let n = 0;
  let temp = head;
  while (temp) {
    n++;
    temp = temp.next;
  }

  let parts = Math.floor(n / k); // 0
  let residue = n % k; // 3

  let res = new Array(k).fill(null);
  let cur = head;
  for (let i = 0; i < k && cur; i++) {
    res[i] = cur;
    let partSize = parts + (i < residue ? 1 : 0);
    for (let j = 1; j < partSize; j++) {
      cur = cur.next;
    }
    let p = cur.next;
    cur.next = null;
    cur = p;
  }
  return res;
};
