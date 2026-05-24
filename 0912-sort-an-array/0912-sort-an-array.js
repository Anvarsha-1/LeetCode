/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
   return MergeSort(nums)
};

function MergeSort(arr){
    if(arr.length<=1)return arr

    let middle = Math.floor(arr.length/2)

    let left = MergeSort(arr.slice(0,middle))
    let right = MergeSort(arr.slice(middle))

    let leftIndex = 0
    let rightIndex = 0
    let result = []

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) 
}

function Merge(left,right){
     
}