/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let target = "baloon"
    let mapTarget = { n: 1, l: 2, a: 1, b: 1, o: 2 }
    let freq = {}
    for(let i=0;i<text.length;i++){
        if(target.includes(text[i])){
           freq[text[i]] = (freq[text[i]] || 0)+1
        }
    }
    let result = Infinity
    if(Object.keys(freq).length<Object.keys(mapTarget).length) return 0
    for(let char in freq){
        min =  Math.floor(freq[char]/mapTarget[char])
        if(min===0)return 0
        if(result>min){
            result = min
        }
    }
   return result
};