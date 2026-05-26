/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    // let charCode = new Set()
    // let str = new Set(word.split("").join(""))
    // let count = 0
    // for(let val of str){
    //     let code = val.charCodeAt(0)
    //     charCode.add(code)
    //     let seen  =  code>96 ? code-32 : code+32
    //     if(charCode.has(seen)){
    //         count++
    //     }
    // }
    // return count
    let table = {}
    let count = 0
    for (let val of word) {
        let code = val.charCodeAt(0)
        if (!table[code]) {
            table[code] = val
            let seen = code > 96 ? code - 32 : code + 32
            if (table[seen]) {
                count++
            }
        }

    } return count
};