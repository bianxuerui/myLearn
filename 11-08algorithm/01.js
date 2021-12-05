/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-08 10:02:24
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-08 10:07:54
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    console.log(l1);
    console.log(l2);
}

let l1 = [1,2,4];
let l2 = [1,3,4];

mergeTwoLists(l1,l2);