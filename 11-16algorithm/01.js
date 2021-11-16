
/**
 * 买卖股票的最佳时机
 */
var maxProfit = function(prices) {
    let slow = 0;
    let fast = 1;
    // let ears = 0;
    let arr = [];
    while (fast < prices.length) {
        if (prices[fast] < prices[slow]) {
            slow = fast;
        } else {
            arr.push(prices[fast] - prices[slow]);
            // if (ears < (prices[fast] - prices[slow])) {
            //     ears = prices[fast] - prices[slow];
            // }
            fast++
        }
    }
    // return ears;
    return arr.length ? Math.max.apply(null,arr) : 0;
};

maxProfit([2,4,1]);
