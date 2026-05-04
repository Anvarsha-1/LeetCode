/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {}
    for(let val of s){
        hash[val] = (hash[val]||0)+1
    }
    for(let char of t){
        if(hash[char]){
            hash[char]--
            if(hash[char]===0) delete hash[char]
            if(hash[char]<0)return false
        }else{
            return false
        }
    }return Object.keys(hash).length===0
};