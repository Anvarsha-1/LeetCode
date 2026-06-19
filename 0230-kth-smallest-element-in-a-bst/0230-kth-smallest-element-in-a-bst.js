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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = []
   const inOrder=(node,result)=>{
        if(!node) return
        inOrder(node.left,result)
        result.push(node.val)
        inOrder(node.right,result)
    }
 
     inOrder(root,result)
    return result[k-1] 
};