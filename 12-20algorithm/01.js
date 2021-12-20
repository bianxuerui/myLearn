/**
 * 剑指 Offer 35. 复杂链表的复制
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head == null) return null;
  let node = head;
  let map = new Map();
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  node = head;

  while (node) {
    map.get(node).next =
      map.get(node.next) == undefined ? null : map.get(node.next);
    map.get(node).random = map.get(node.random);
    node = node.next;
  }
  return map.get(head);
};
