
/**
 * 面试题 02.02. 返回倒数第 k 个节点
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var kthToLast = function(head, k) {
    let l1 = head;
    let l2 = head;
    for (let i = 0; i < k; i++) {
        l1 = l1.next;
    }
    while (l1 != null) {
        l1 = l1.next;
        l2 = l2.next;
    }
    return l2.val;
};