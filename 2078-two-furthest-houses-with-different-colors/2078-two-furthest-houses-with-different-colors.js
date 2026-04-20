/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    // let i = 0
    // let j = colors.length - 1

    // let k = colors.length - 1
    // let l = 0

    // let maxDis = 0
    // while (i < j) {
    //     if (colors[i] === colors[j]) {
    //         j--
    //     }
    //     if (colors[l] === colors[k]) {
    //         l++
    //     }
    //     else {
    //         maxDis = Math.max(j - i, k - l, maxDis)
    //         j--
    //         l++
    //     }
    // }
    // return maxDis
   
   let first = 0;
   let second = 0;
   let j = colors.length-1;
   let k = 0;

    for(let i=0;i<colors.length;i++){
        if(colors[i]!==colors[j]){
            first = j-i
            break
        }
    }

     for(let i=colors.length-1;i>0;i--){
        if(colors[i]!==colors[k]){
            second = i-k
            break
        }
    }
      console.log(first,second)
    return Math.max(first,second)
};