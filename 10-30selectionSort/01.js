/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-01 16:33:49
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-03 14:14:20
 */
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

 let arr = [1,2,3,2,3,4];

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
