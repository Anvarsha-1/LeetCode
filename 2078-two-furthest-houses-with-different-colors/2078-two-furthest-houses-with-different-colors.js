/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
 let i = 0
 let j = colors.length-1
 let k = colors.length-1
 let l = 0
 let maxDis = 0
 while(i<j){
      if(colors[i]===colors[j]){
        j--
      }
      if(colors[l]===colors[k]){
        l++
      }
      else{
        console.log(j,i)
        maxDis = Math.max(j-i,k-l,maxDis)
        j--
        l++
      }
 }  
 return maxDis
};