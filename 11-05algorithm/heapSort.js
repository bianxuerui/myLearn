
/**
 * 堆排序
 */

 let arr = [4, 10, 3, 5, 1, 2];

 // 交换函数
 function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

 // 堆化
 function heapify(arr, n, i) {
    if (i >= n) {
        return ;
    }
    // 第一个子节点
    c1 = 2 * i + 1;
    // 第二个子节点
    c2 = 2 * i + 2;
    let max = i;
    if (c1 < n && arr[c1] > arr[max]) {
        max = c1;
    }
    if (c2 < n && arr[c2] > arr[max]) {
        max = c2;
    }
    if (max != i) {
        // 交换
        swap(arr, max, i);
        heapify(arr, n, max);
    }
 }

 // 数组较乱的情况下，对整个数组进行堆化处理
 function buildHeap(arr, n){
     let lastNode = n - 1;
     let parent = (lastNode - 1) / 2;
     for (let i=parent; i >= 0; i--) {
         heapify(arr, n, i);
     }
 }

 // 堆排序
 function heapSort(arr, n) {
     // 建一个堆
     buildHeap(arr, n);
     
     for (i = n - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapify(arr, i, 0); // i 代表的是当前这个数的节点个数
     }
 }

//  heapify(arr, arr.length, 0);
//  buildHeap(arr, arr.length);
 heapSort(arr, arr.length);

 console.log(arr);




 











