/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let str = n.toString().split("")
    str.sort((a,b)=>b-a)
    return Number(str[0])*Number(str[1])
};