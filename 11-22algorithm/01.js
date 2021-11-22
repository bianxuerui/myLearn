/**
 * 最长回文字符串
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Set();
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            res += 2;
            map.delete(s[i]);
        } else {
            map.add(s[i]);
        }
    }
    if (map.size >= 1) {
        res++;
    }
    return res;
};