
/**
 * 1721.交换链表中的节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let cur = head;
    let first = head;
    let second = head;
    let count = 1;
    let temp;
    while (cur.next != null) {
        if (count < k) {
            first = first.next;
        } else {
            second = second.next;
        }
        count++;
        cur = cur.next;
    }
    temp = first.val;
    first.val = second.val;
    second.val = temp;
    return head;
};