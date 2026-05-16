/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum = 0;
    let string = n.toString()
    let i=1
    while(i<=string.length){
        if(i%2!==0){
            sum+=Number(string[i-1])
        }else{
            sum+=Number(string[i-1]-(string[i-1]*2))
        }
        i++
    }
    return sum
};