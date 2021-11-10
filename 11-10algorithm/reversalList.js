
/**
 * 反转链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reverseList = function(head) {
    let temp;
    let pre = null;
    let cur = head;
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
};