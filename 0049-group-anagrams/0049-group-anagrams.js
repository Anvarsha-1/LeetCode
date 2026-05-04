/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = new Map()

    for (let str of strs) {
        let count = new Array(26).fill(0)

        for (let char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++
        }
      const key = count.join("#")

      if(!hash.has(key)){
        hash.set(key,[])
      }
      hash.get(key).push(str)
    }return Array.from(hash.values())
};