/*
 * @文件描述: 
 * @公司: 漫蝌网
 * @作者: 卞雪瑞
 * @Date: 2021-11-17 15:27:21
 * @LastEditors: 卞雪瑞
 * @LastEditTime: 2021-11-17 21:56:16
 */
/**
 * 快乐数
 */
var isHappy = function(n) {
    let set = new Set();
    let num = n + '';
    let sum = 0;
    while (sum != 1) {
        sum = 0;
        for (let i=0; i<num.length; i++) {
            sum += num[i] * num[i];
        }
        if (set.has(sum)) return false;
        num = sum + '';
        set.add(sum);
    }
    return true;
};

isHappy(17);