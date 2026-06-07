/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    let nodes = {}
    let childNode = new Set()
    let len = descriptions.length
    for(let [p,c,isLeft] of descriptions){
  
    childNode.add(c)

        if(!nodes[p]){
            nodes[p] = new TreeNode(p) 
        }
        if(!nodes[c]){
            nodes[c] = new TreeNode(c)
        }
        if(isLeft){
            nodes[p].left = nodes[c]
        }else{
            nodes[p].right = nodes[c]
        }

    }
 
    for(let [p,c,l] of descriptions){
        if(!childNode.has(p)){
            return nodes[p]
        }
    }

};