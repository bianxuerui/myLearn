
/** 
 * 归并排序
 */

//  let arr = [1, 2, 8, 9, 4, 5, 6, 7];
 let arr = [6, 8, 10, 9, 4, 5, 2, 7];



 function merge(arr, L, M, R) {
    let leftSize = M - L;
    let rightSize = R - M + 1;
    let leftArr = [];
    let rightArr = [];

    // 左边的数组
    for (let i = L; i < M; i++) {
        leftArr[i - L] = arr[i];
    }

    // 右边的数组
    for (let i = M; i <= R; i++) {
        rightArr[i - M] = arr[i];
    }

    let i = 0;
    let j = 0;
    let k = L;
    while (i < leftSize && j < rightSize) {
        if (leftArr[i] < rightArr[i]) {
            arr[k] = leftArr[i];
            i++;
            k++;
        } else {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    while (i < leftSize) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightSize) {
        arr[k] = rightSize[j];
        j++;
        k++;
    }
 }

 function mergeSort(arr, L, R) {
     if (L == R) return false;
     let M = Math.floor((L + R) / 2);
     mergeSort(arr, L, M);
     mergeSort(arr, M+1, R);
     merge(arr, L, M+1, R);
 }

 let L = 0;
 let R = arr.length - 1;
 let M = arr.length / 2;
//  merge(arr,L,M,R); // 一次二分没有问题

 mergeSort(arr,L,arr.length); // 乱序的情况下会有问题
 console.log(arr);