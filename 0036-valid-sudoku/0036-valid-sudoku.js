/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let col = {}
    let row = {}
    let square = {}
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let current = board[r][c]
            if(current==="."){
                continue
            }
            if(!row[r]) row[r]= new Set()
            if(!col[c]) col[c] = new Set()
            let squareKey = `${Math.floor(r/3)}-${Math.floor(c/3)}`
            if(!square[squareKey]){
                square[squareKey] = new Set()
            }
            
            if(col[c].has(current) ||
             row[r].has(current) ||
             square[squareKey].has(current)
             ){
                return false
             }
             col[c].add(current)
             row[r].add(current)
             square[squareKey].add(current)
            
        }
    }
    return true
};