/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let left =0
    let right = 0
    let dash =  0
    for(let i=0;i<moves.length;i++){
        if(moves[i]==="L"){
            left++
        }else if(moves[i]==="R"){
            right++
        }else{
            dash++
        }
    }
    return Math.abs(left-right)+dash
};