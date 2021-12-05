/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-03 11:18:45
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-03 14:20:56
 */
let list1 = [1,2,3];
let list2 = [2,3,4];

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// array->list
function generateList(array) {
  const fakeHead = new ListNode(0);
  let current = fakeHead;

  for (let i = 0; i < array.length; i++) {
    current.next = { val: array[i], next: null };
    current = current.next;
  }

  return fakeHead.next;
}

// list->array
function generateArray(list) {
  let res = [];

  while (list) {
    res.push(list.val);
    list = list.next;
  }

  return res;
}

let list11 = generateList(list1);
let list22 = generateList(list2);

// 合并两个链表
function mergeLists(l1, l2) {
  if(l1 == null) return l2;
  if(l2 == null) return l1;
  if (l1.val <= l2.val) {
    l1.next = mergeLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeLists(l1, l2.next);
    return l2;
  }
}

console.log(generateArray(mergeLists(list11, list22)));