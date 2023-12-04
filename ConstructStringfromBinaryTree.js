/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {
    //helper Root, left right
    const helper = root => {
        if (root === null)
            return '';
        
        let left = helper(root.left);
        let right = helper(root.right);
        
        if (!left && !right) {
            return `${root.val}`;
        }
        if (!right) {
            return `${root.val}(${left})`;
        } else {
            return `${root.val}(${left})(${right})`;
        }
    }
    return helper(root);
};