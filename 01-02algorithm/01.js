/**
 * 103. 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let queue = [root];
    let res = [];
    let num = 0;

    if (!root) return [];
    while (queue.length) {
        let temp = [];
        for (let i=queue.length; i>0; i--) {
            let n = queue.shift();
            temp.push(n.val);
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
        }
        num++;
        if (num % 2 === 0) {
            temp.reverse();
        }
        res.push(temp);
    }
    return res;
};