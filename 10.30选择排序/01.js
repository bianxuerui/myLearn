/** 
 * JS选择排序
 * 输入：[3,2,1]
 * 输出：[1,2,3]
 */

/**
 * 思路
 * 0 > minIndex 交换
 * 1 > minIndex 交换
 * ...
 */

 let arr = [3,2,1];

 function test(arr) {
    for (let i=0; i<arr.length; i++) {
        let minIndex = i;
        for (let k=i+1; k<arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }
        // 交换当前i下标和最小值下标的位置
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
 }

 test(arr);

 console.log(arr);
