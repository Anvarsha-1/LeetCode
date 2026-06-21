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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    
    const depth = (node)=>{
        if(!node) return 0
     let left = depth(node.left)
     let right = depth(node.right)

     return(Math.max(left,right))+1 
    }
    let maxDepth = depth(root)
    let sum = 0
    const findSum=(node,curDepth)=>{
      if(!node) return 
      findSum(node.left,curDepth+1)
      if(curDepth===maxDepth){
        sum+=node.val
      }
      findSum(node.right,curDepth+1)
    }
    findSum(root,1)
     return sum
};