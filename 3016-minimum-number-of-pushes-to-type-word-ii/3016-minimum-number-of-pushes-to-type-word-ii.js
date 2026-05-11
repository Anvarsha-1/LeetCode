/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    if (word.length <= 8) return word.length
    let map = {}
    for (let val of word) {
        map[val] = (map[val] || 0) + 1
    }
    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1])
    let pushes = 0
    let k = 0
    for (let i = 0; i < sorted.length; i++) {
       k = Math.floor(i/8)+1
        pushes += sorted[i][1] * k
    }
    return pushes
};