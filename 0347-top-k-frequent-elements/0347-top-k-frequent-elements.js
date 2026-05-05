/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //  let hash = {}
    //  let count =  Array.from({length:nums.length+1},()=>[])
    //  for(let val of nums){
    //     hash[val] = (hash[val]||0)+1       
    //  }
    //  console.log(hash)
    //  for(let key in hash){
    //     console.log(count[key])
    //    count[hash[key]].push(key)
    //  }
    //  let result = []
    //  for(let i=count.length-1;i>=1;i--){
    //     for(let j=0;j<count[i].length;j++){
    //         result.push(Number(count[i][j]))
    //         if(result.length===k) return result
    //     }
    //  }  

    let hash = {}

    for(let val of nums){
        hash[val] = (hash[val]||0)+1
    }
    let result = []
    let sorted = Object.entries(hash).sort((a,b)=>b[1]-a[1])
    for(let i=0;i<k;i++){
        result.push(Number(sorted[i][0]))
    }return result
};