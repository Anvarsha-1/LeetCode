/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  let occurence = {}
  let index = 0
  let seen = {}
  for(let val of word){
     let code = val.charCodeAt(0)
    if(code>96){
        occurence[val] = index
    }else if(code<96 && occurence[val]==undefined){
        
        occurence[val] = index
    }
    index++
  } 

  let count= 0
  for(let key in occurence){
    let code = key.charCodeAt(0)
    seen[code] = key
    let check = code > 96 ? code - 32 : code + 32
    let char1 = occurence[seen[check]]
    let char2 = occurence[key]
    if(check>96 && seen[check] && char1<char2){
      count++
    }else if(check<96 && seen[check] && char1>char2){
        count++
    }
    console.log(seen[check],occurence[seen[check]],occurence[key])
  }return count  
};