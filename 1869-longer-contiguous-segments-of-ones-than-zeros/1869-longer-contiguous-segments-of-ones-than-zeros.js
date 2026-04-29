/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let zeroCount = 0
    let onceCount = 0
    let zero = 1
    let once = 1
    for(let i=0;i<s.length;i++){
        if(s[i]==="0"){
            if(s[i]===s[i+1]){
                zero+=1
            }else{
                zero = 1
            }
            if(zero>zeroCount){
                zeroCount = zero
            } 
        }else if(s[i]==="1"){
            if(s[i]===s[i+1]){
             once+=1
            }else{
                once=1
            }
            if(once>onceCount){
                onceCount=once
            }
        }
    }return onceCount>zeroCount
};