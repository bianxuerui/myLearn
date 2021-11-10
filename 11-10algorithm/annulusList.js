
/**
 * 环形链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var hasCycle = function(head) {
    let low = head;
    let fast = head;
    while (low && fast && fast.next) {
        low = low.next;
        fast = fast.next.next;
        if (fast == null) return false;
        if (fast == low) return true;
    }
    return false;
};