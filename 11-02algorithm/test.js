/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-02 21:52:46
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-02 22:24:27
 */

let s1 = readline();
let s2 = readline();
let s3 = readline();

function test(s) {
  let len = s.length;
  if (len % 2 ==1) return false;
  let arr = [];
  for (let item of s) {
    if (item == '('|| item == '[' || item == '{') {
      arr.push(item);
    } else {
      let arrLen = arr[arr.length - 1];
      if (item == ')' && arrLen != '(') return false;
      if (item == ']' && arrLen != '[') return false;
      if (item == '}' && arrLen != '{') return false;
      arr.pop();
    }
  }
  return !arr.length;
}
console.log(test(s1));
console.log(test(s2));
console.log(test(s3));