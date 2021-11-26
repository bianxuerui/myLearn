
/**
 * 24. 两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    while (p.next && p.next.next) {
        let n1 = p.next;
        let n2 = p.next.next;
        // 交换
        p.next = n1.next;
        n1.next = n2.next;
        n2.next = n1;

        p = n1;
    }
    return dummy.next;
};