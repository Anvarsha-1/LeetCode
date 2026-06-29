/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    
    if(patterns.length===1 && patterns[0]!=word)return 0
    
  
   
    let count = 0
    for(let i=0;i<patterns.length;i++){
        if(word.includes(patterns[i])){
            count++
        }
      }
 
    return count
};