var isValidSudoku = function (board) {
    var row = new Array(9).fill(0).map(_=>new Array(9).fill(0))
    var cloum = new Array(9).fill(0).map(_=>new Array(9).fill(0))
    var latticeAry = new Array(3).fill(0).map(_=>new Array(3).fill(0).map(_=>new Array(9).fill(0)))
    for(let i=0 ; i<9 ; i++){
        for(let j=0 ; j<9 ; j++){
            const val = board[i][j]
            if(val !== '.'){
                const index = Number(val) - 1
                row[i][index]++
                cloum[j][index]++
                latticeAry[Math.floor(i/3)][Math.floor(j/3)][index]++
                if(row[i][index]>1 || cloum[j][index]>1 || latticeAry[Math.floor(i/3)][Math.floor(j/3)][index] >1){
                    return false
                }
            }
        }
    }
    return true
}
