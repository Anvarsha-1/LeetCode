/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let hash = {}
    let duplicate = 0
    let resultLength = 0
    
    
   for(let val of nums){
    if(!hash[val]){
        hash[val] = 1
       
    }else{
        hash[val]++
        duplicate++
        if(resultLength<hash[val]){
          resultLength= hash[val]
        }
        
    }
   }
   if(duplicate===0)return [nums]

   let result = Array.from({length:resultLength},()=>[])

    for(let key in hash){
        while(hash[key]>=1){
            result[hash[key]-1].push(Number(key))
            hash[key]--
        }
    }return result
};