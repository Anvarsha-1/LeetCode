/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return

    const dfs = (node, visited = new Map()) => {
        if (!node) return

       
        if (visited.has(node.val)) {
            return visited.get(node.val)
        }
        let  root = new _Node(node.val)
        visited.set(node.val, root)

        for (let nei of node.neighbors) {
               root.neighbors.push(dfs(nei, visited))
        } return root
    }
    
    return dfs(node)
};