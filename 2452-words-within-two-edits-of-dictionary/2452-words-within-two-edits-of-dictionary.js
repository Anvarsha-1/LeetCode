/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
    let result = []

    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (queries[i] === dictionary[j] && result[result.length - 1] !== queries) {
                result.push(queries[i])
                break
            }
            else {
                let added = checkMatching(queries[i], dictionary[j], result)
                if (added == true) break
            }
        }
    }
    return result
};

function checkMatching(q, d, r) {
    let limit = 0
    let k = 0
    let added = false
    while (k < q.length) {
        if (q[k] !== d[k]) {
            limit++
        }
        if (limit > 2) {
            break
        }
        k++
    }

    if (limit < 3) {
        r.push(q)
        added = true
        return added
    }
}