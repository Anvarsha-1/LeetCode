/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    if (words.length == 1) return 1
    dicti = { 'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.", 'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..", 'm': "--", 'n': "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--", 'z': "--.." }
    let seen = new Set()

    for (let i = 0; i < words.length; i++) {
        let mouseWord = ""
        for (let j = 0; j < words[i].length; j++) {
            mouseWord += dicti[words[i][j]]
        }
            seen.add(mouseWord)
   
    } return seen.size

};