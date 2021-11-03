
/**
 * 冒泡排序
 * 输入：[1,3,2]
 * 输出：[1,2,3]
 */

 let arr = [1,3,2];
 console.log(sort(arr));

 function sort(arr) {
    for (let i=0; i<arr.length - 1; i++) {
        for (let j=0; j<arr.length - 1 - i; j++) {
            // 对比交换
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
 }


