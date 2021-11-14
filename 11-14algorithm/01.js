
/**
 * 平方数之和
 */

 // 双指针
var judgeSquareSum = function(c) {  
    let small = 0;
    let big = Math.floor(Math.sqrt(c));
    while (small <= big) {
        let sum = small * small + big * big;
        if (sum == c) {
            return true;
        } else if (sum > c) {
            big--;
        } else {
            small++
        }
      }
      return false;
  }

  // 枚举
  var judgeSquareSum = function(c) {    
    let max = Math.floor(Math.sqrt(c));    
    for (let a = 0; a <= max; a++) {        
        let b = Math.floor(Math.sqrt(c - a * a));        
        if (a * a + b * b == c) return true;    
    }    
    return false;
  };
