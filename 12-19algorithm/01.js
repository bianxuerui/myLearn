/**
 * 946. 验证栈序列
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let arr = [];
  let index = 0;
  for (let i = 0; i < pushed.length; i++) {
    arr.push(pushed[i]);
    while (
      popped[index] != undefined &&
      popped[index] === arr[arr.length - 1]
    ) {
      arr.pop();
      index++;
    }
  }
  return !arr.length;
};
