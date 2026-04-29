/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let power = 0
    let maxUnique = 1

    for(let i=0;i<=s.length-1;i++){
        console.log(s[i],s[i+1])
        if(s[i]===s[i+1]){
            maxUnique+=1
        }else{
            if(power<maxUnique){
                power = maxUnique 
            }
            maxUnique = 1
        }
    }return power   
};