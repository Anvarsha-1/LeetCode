/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n==1)return true
    let number = n
    let seen = new Set()
    while(n){
        let resulttrack = 0
        let str = number.toString().split("")
        for(let num of str){
             resulttrack +=Number(num*num)
        }
        if(seen.has(resulttrack)){
            return false
        }
        seen.add(resulttrack)
        number = resulttrack
        if(resulttrack===1) return true

    }return false
};