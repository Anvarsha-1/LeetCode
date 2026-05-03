/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) return true
    let str = s.split("")
    for (let i = 0; i < str.length-1; i++) {
        let first = str[0]
        for (let j = 0; j < str.length-1; j++) {
            str[j] = str[j + 1]
        }
        str[str.length - 1] = first
        if (str.join("") === goal) return true
    } return false
};