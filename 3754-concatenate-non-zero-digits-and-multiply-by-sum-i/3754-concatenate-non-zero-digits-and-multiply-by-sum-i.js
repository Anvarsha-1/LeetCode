/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
//   let str = n+""
//   let digit = ""
//   let sum = 0
//   for(let val of str){
//     if(val!=0){
//       digit+=val
//       sum+=Number(val)
//     }
//   }
//   return Number(digit*sum)

  let x = 0;
  let sum = 0;
  let i = 1
  while(n){
    if(n%10!==0){
        sum+=n%10
        x += (n%10)*i
        i*=10
    }
    n = Math.floor(n/10)
  }return x*sum
  
};