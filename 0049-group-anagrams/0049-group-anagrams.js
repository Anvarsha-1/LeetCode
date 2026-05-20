/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = []
    let answer = []
    let seen = {}
    for (let i = 0; i < strs.length; i++) {
        result[i] = strs[i].split("").sort().join("")
    }
    let index = 0
    for (let i = 0; i < result.length; i++) {
        let str = result[i]
        if (seen[str]===undefined) {
            seen[str] = index
            index+=1
        }
         else {
            answer[seen[str]].push(strs[i])
        }
        if (!answer[seen[str]]) {
            answer[seen[str]] = []
            answer[seen[str]].push(strs[i])
        }

    } 
    return answer
};