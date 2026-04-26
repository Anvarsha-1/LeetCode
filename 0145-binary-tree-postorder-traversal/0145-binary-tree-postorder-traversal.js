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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let arr = []
    function postOrder(node=root){
        if(!node) return  
        postOrder(node.left)
        postOrder(node.right)
        arr.push(node.val)
    }
    postOrder()
    return arr
};