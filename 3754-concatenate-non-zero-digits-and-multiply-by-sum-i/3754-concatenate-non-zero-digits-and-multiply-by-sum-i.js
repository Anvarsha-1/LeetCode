/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {

  let str = n+""
  let digit = ""
  let sum = 0
  for(let val of str){
    if(val!=0){
      digit+=val
      sum+=Number(val)
    }
  }
  return Number(digit*sum)
  
};