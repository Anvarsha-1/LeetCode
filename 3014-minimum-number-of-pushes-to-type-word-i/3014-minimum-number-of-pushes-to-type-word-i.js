/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    if(word.length<=8)return word.length
    let result = 0
    let length = word.length
    let i = 2
    let min = 8
   while(i<=4){
    let minus = length-min
    if(minus<min){
        result+=minus*i
        break
    }
    result+=(min * i)
    length = minus
    i++
   }
   return result + min
};