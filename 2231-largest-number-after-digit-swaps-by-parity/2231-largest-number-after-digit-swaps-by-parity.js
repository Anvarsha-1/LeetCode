/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let n = num.toString().split("")
    // let i = n.length-1
    // let j = 0
    // console.log(even)
    // while(i>j) {
    //     if(n[j]%2===n[i]%2 && n[i]>n[j] ){
    //         [n[i],n[j]] = [n[j],n[i]]
    //         j++
    //     }
    //     i--
    // }console.log(n)

    for(let i=0;i<n.length;i++){
        for(let j=i+1;j<n.length;j++){
            if(n[i]%2===n[j]%2 && n[i]<n[j]){
                [n[i],n[j]] = [n[j],n[i]]
            }
        }
    }return Number(n.join(""))
};