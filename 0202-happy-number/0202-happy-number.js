/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n==1)return true
    let number = n
    let seen = new Set()
    while(true){
        let sum = 0
        while(n>0){
          let digits =  n%10
          sum += digits * digits
          n = Math.floor(n/10)
        }
        if(seen.has(sum)) return false
        seen.add(sum)
        if(sum===1) return true
        n=sum
    }
};