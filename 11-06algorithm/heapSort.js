
// 交换
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapift (arr, n, i) {
    c1 = 2 * i + 1;
    c2 = 2 * i + 2;
    let max = i;
    if (c1 < n && arr[c1] > arr[max]) {
        max = c1;
    }
    if (c2 < n && arr[c2] > arr[max]) {
        max = c2;
    }
    if (max != i) {
        swap(arr, max, i);
        heapift(arr, n, max);
    }
}

function buildHeap (arr, n) {
    let lastNode = n - 1;
    let parent = (lastNode - 1) / 2;
    for (let i=parent; i>=0; i--) {
        heapift(arr, n, i);
    }
}

function heapSort (arr, n) {
    buildHeap(arr, n);

    for (let i = n-1; i >= 0; i--) {
        swap(arr, i, 0);
        heapift(arr, i, 0);
    }
}


let arr = [2, 5, 3, 1, 6, 4];

// buildHeap(arr, arr.length);
heapSort(arr, arr.length);

console.log(arr);