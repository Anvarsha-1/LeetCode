/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n==1)return true
    let number = n
    let seen = new Set()
    while(n){
        let str = number.toString().split("")
        number = 0
        for(let num of str){
             number +=Number(num*num)
        }
        if(seen.has(number)){
            return false
        }
        seen.add(number)
        if(number===1) return true
    }return false
};