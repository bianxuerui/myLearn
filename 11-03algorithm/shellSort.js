/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-03 20:52:11
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-03 21:04:02
 */

/**
 * 希尔排序
 * 输入：[8,9,1,7,2,4,6]
 * 输出：[1,2,4,6,7,8,9]
 */

 let arr = [8,9,1,7,2,4,6];
 console.log(shellSort(arr));

 function shellSort(arr) {
    let preIndex, current;
    let len = arr.length;
    gap = Math.floor(len/2);
    for (gap; gap > 0; gap = Math.floor(len/2)) {
        
        for (let i=gap; i < len; i++) {
            temp = arr[i];
            for (let j=i-gap; j>=0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[i+gap] = temp;
        }
    }
    return arr;
 }