/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum = 0;
    let string = n.toString()
    for(let i=0;i<string.length;i++){
        let digit = Number(string[i])
        if(i%2==0){
            sum+=digit
        }else{
            sum-=digit
        }
    }
    return sum
};