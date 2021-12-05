/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-17 14:09:44
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-17 15:16:53
 */
/**
 * 347. 前 K 个高频元素
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let item of nums) {
        map.set(item, (map.get(item) || 0) + 1);
    }
    let arr = Array.from(map);
    arr.sort((a,b) => b[1]-a[1])
    console.log(arr);

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0]);
    }
    return res;
};

topKFrequent([3,0,1,0]);