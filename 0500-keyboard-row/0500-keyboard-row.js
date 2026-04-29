/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let result = []
     let alpha = {q:1,w:1,e:1,r:1,t:1,y:1,u:1,i:1,o:1,p:1,a:2,s:2,d:2,f:2,g:2,h:2,j:2,k:2,l:2,z:3,x:3,c:3,v:3,b:3,n:3,m:3}

     for(let word of words){
        let check = []
        for(let char of word){
            let str = char.toLowerCase()
            if(check.length===0){
                check.push(alpha[str])
                continue
            }
            else if(check[check.length-1]!==alpha[str]){
                break
            }
            check.push(alpha[str])
        }
        if(check.length===word.length){
            result.push(word)
        }
    
     }return result
};