/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitudes =[0];
    for(i=0;i<gain.length;i++){
        altitudes.push(gain[i]+altitudes[i])
    }return Math.max(...altitudes)
};