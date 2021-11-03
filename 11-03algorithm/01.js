
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

console.log(test(s1))
console.log(test(s2))
console.log(test(s3))