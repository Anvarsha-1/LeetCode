/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
   
   let maxSubstrLen = 0
   
   for(let i=0;i<s.length;i++){
    let visited = {}
    let curLen=0
    for(let j=i;j<s.length;j++){
         visited[s[j]] = (visited[s[j]]||0)+1
         if(visited[s[j]]<=2){
         curLen++
         }else{
            break
         }
         
    }
    if(curLen>=maxSubstrLen){
        maxSubstrLen=curLen
    }
   }
  return maxSubstrLen
};