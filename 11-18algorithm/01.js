
/**
 * 二叉树的直径
 */
var diameterOfBinaryTree = function(root) {
    let res = 0;
    function getHeight(root) {
        if (root == null) return 0;
        const l = getHeight(root.left);
        const r = getHeight(root.right);
        res = Math.max(res,l + r);
        return Math.max(l, r) + 1;
    }
    getHeight(root);
    return res;
};