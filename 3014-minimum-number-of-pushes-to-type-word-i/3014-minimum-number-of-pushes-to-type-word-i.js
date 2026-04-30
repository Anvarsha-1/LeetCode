/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    if(word.length<=8)return word.length
    let result = 8
    let length = word.length
    let i = 2
   while(i<=4){
    let minus = length-8
    if(minus<8){
        result+=minus*i
        break
    }
    result+=(8 * i)
    length = minus
    i++
   }
   return result
};