/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = [pref[0]]
    for(let i=0;i<pref.length-1;i++){
        arr.push(pref[i]^pref[i+1])
    }return arr
};