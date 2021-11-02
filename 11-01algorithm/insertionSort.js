
/**
 * 插入排序
 * 输入：[2,3,1]
 * 输出：[1,2,3]
 */

 let arr = [3,2,1,68,128,6];

 function test() {
    let preIndex, current;
    for (let i=1; i<arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
 }

 test(arr);

 console.log(arr);








