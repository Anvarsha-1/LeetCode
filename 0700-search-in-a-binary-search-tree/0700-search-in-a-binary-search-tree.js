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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return levelOrder(root,val)
};

function levelOrder(root,val){
    let cur = root
    while(cur){
        if(cur.val===val){
            return cur
        }
        if(cur.val>val){
           cur =  cur.left
        }else if(cur.val<val){
           cur = cur.right
        }
    }return null
}