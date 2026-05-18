/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false
    let check = ""
    let y = x
    while(y){
        check+=y%10
        y = Math.floor(y/10)
    }
    console.log()
    return Number(check)===x
};