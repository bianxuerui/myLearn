
/**
 * 剑指 Offer II 004. 只出现一次的数字 
 */
var singleNumber = function(nums) {
    let obj = new Map();
    for (let temp of nums) {
        obj.set(temp, (obj.get(temp) || 0) + 1)
    }
    let val = 0;
    for (let [temp, times] of obj.entries()) {
        if (times == 1) {
            val = temp;
            break;
        }
    }
    return val;
};