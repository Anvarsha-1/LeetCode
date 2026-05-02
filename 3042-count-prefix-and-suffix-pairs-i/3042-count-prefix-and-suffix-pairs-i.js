/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0
    for(let i=0;i<words.length;i++){
        for(let j=i+1;j<words.length;j++){
       if(isPrefixAndSuffix(words[i],words[j])){
         count++
       }
        }
    }return count
};

function isPrefixAndSuffix(str1,str2){
    let prefix = str2.slice(0,str1.length)
    let sufix = str2.slice(str2.length-str1.length)
    if(prefix===str1 && sufix===str1){
        return true
    }return false
}