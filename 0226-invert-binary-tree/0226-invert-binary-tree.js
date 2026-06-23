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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null
    let queue = []
    queue.push(root)
    while(queue.length){
        let cur = queue.shift()
        let temp = cur.left
        cur.left = cur.right
        cur.right = temp

        if(cur.left) queue.push(cur.left)
        if(cur.right) queue.push(cur.right)
    }
    return root
};