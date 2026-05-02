/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    if(n===1) return 0
    let num = n
    let count = 0
    while(num>=1){
        let check = num
        let goodNum = false
        while(check>=1){
            let digit = check%10
            check = Math.floor(check/10)
            if(digit===2|| digit===5 || digit===9 || digit===6){
              goodNum = true
            }
            if(digit===3 || digit===4 || digit===7){
                goodNum= false
                break
            }
        }
        if(goodNum){
            count++
        }
        check--
        num--
    }return count
};