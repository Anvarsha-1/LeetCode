/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let count = 0
    num1 = num1<100 ? 100 : num1
    for (let i = num1; i <= num2; i++) {
        let n = i.toString()
        console.log(n)
        for (let j = 1; j <= n.length - 2; j++) {
            if (n[j] > n[j - 1] && n[j] > n[j + 1]) {  //peak
                count++
            } else if (n[j] < n[j - 1] && n[j] < n[j + 1]) { // valley
                count++
            }
        }
    }return count
};