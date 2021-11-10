
 /**
  * 剑指 Offer 06. 从尾到头打印链表
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
 var reversePrint = function(head) {
    let arr = [];
    let Node = head;
    while (Node) {
        arr.unshift(Node.val);
        Node = Node.next;
    }
    return arr;
};