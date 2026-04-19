/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0
   for(let i=0;i<s.length;i++){
    let j = 0
    while(j<t.length){
        if(s[i]==t[j]){
           count++
           i++
        }j++
    }
   } return count==s.length
};