/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   let start = 0
   let maxLen = 0

   for(let i=0;i<s.length;i++){
    let l = i
    let r = i

    while(l>=0 && r<s.length && s[l]===s[r]){
        if(r-l+1>maxLen){
            maxLen = r-l+1
            start = l
        }
        l-=1
        r+=1
    }
     l = i
     r = i+1
    while(l>=0 && r<s.length && s[l]===s[r]){
        if((r-l)+1>maxLen){
            maxLen = r-l+1
            start = l
        }
        l-=1
        r+=1
    }
    
   }return s.substring(start,start+maxLen)
};

