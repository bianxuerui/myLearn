/**
 * 面试题 02.03. 删除中间节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // 把当前节点的下一个节点的值，赋值给当前节点
  // 然后我们再把下一个节点删除，是不是就相当于删除了当前节点？
  node.val = node.next.val;
  node.next = node.next.next;
};
