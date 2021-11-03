
/**
 * 分组
 * @param {*} arr 要排序的数组
 * @param {*} left 左边界
 * @param {*} right 右边界
 */
function sort(arr, left1, right1) {
    let len = arr.length;
    let partitionIndex; // 基准
    let left = left1 ? left1 : 0;
    let right = right1 ? right1 : len - 1;

    // 结束条件
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        sort(arr, left, partitionIndex - 1);
        sort(arr, partitionIndex + 1, right);
    }

    return arr;
}

/**
 * 分组
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i=index; i<=right; i++) {
        if (arr[i] < arr[pivot]) {
            // 交换
            swap(arr, i, index);
            index++;
        }
    }

    swap(arr, pivot, index - 1);
    return index - 1;
}

/**
 * 交换
 * @param {*} arr 
 * @param {*} i 
 * @param {*} k 
 */
function swap (arr, i, k) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

let arr = [4,3,2,1];

sort(arr);

console.log(arr);