/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    if(word.length<=8)return word.length
    let map = {}
    for(let val of word){
        map[val] = (map[val]||0)+1
    }
    let sorted = Object.entries(map).sort((a,b)=> b[1]-a[1])
    console.log(sorted)
    console.log(map)
   let pushes = 0
   let inc = 8
   let k = 1
   for(let i=0;i<sorted.length;i++){
     for(let j=1;j<sorted[i].length;j++){
       
        if(i===inc){
            k+=1
            inc+=8
        }
       
        pushes+=sorted[i][j] * k
        console.log(sorted[i][j],"*",k,"inc",inc,i,pushes)
     }
   }
    return pushes 
};