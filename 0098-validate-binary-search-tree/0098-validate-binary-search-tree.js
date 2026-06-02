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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let sortedElem = []
    inOrder(node=root,sortedElem)
    for(let i=0;i<sortedElem.length;i++){
        if(sortedElem[i]>=sortedElem[i+1]){
            return false
        }
    }return true
};

function inOrder(node,sortedElem){
    if(!node) return

    inOrder(node.left,sortedElem)
    sortedElem.push(node.val)
    inOrder(node.right,sortedElem)
}