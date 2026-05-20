/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let freq = {}
    let result = []
    let count = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] === B[i]) {
            console.log(A[i], i, B[i])
            count++
            result.push(count)
        }
        else {
            if (!freq[A[i]]) {
                freq[A[i]] = 1
                if (!freq[B[i]]) {
                    freq[B[i]] = 1
                } else {
                    count++
                    result.push(count)
                    continue
                }
                result.push(count)
                continue
            }
            if (freq[A[i]] === 1) {
                count++
                if (freq[B[i]] === 1) {
                    count++
                } else if(!freq[B[i]]) {
                    freq[B[i]] = 1
                }
                result.push(count)
                continue
            }
            if (freq[B[i]] === 1) {
                count++
                if (freq[A[i]] === 1) {
                    count++
                } else if (!freq[B[i]]) {
                    freq[A[i]] = 1
                }
                result.push(count)
                continue
            }
        }
    } return result

};