/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let charCode = new Set()
    let str = new Set(word.split("").join(""))
    console.log(str)
    let count = 0
    for(let val of str){
        let code = val.charCodeAt(0)
        charCode.add(code)
        let seen  =  code>96 ? code-32 : code+32
        if(charCode.has(seen)){
            count++
        }
    }
    
    return count
};