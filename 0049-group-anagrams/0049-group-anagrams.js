/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = new Map()

    for (let i = 0; i < strs.length; i++){
        let char = strs[i].split("").sort().join("")
        if(!result.has(char)){
            result.set(char,[strs[i]])
        }else{
            result.get(char).push(strs[i])
        }
    }return Array.from(result.values())
   
};