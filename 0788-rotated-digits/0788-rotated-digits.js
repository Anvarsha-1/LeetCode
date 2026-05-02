/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    if(n===1) return 0
   
     let count = 0
   for(let i=0;i<=n;i++){
        let num = i
        let goodNum = false
        let isValid = true
        while(num>=1){
            let digit = num%10
            num = Math.floor(num/10)

            if(digit===3 || digit===4 || digit===7){
                isValid = false
                break
            }

            if(digit===2|| digit===5 || digit===9 || digit===6){
              goodNum = true
            }   
        }
        if(goodNum && isValid){
            count++
        }
    }return count
};