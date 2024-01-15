/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    var pawnCount = 0;
    var horizontal;
    var vertical = "";
    
    for (let i in board) {
        if (board[i].includes('R')) {
            horizontal = board[i].join("");
            for (let j = 0; j < 8; j++) {
                vertical += board[j][board[i].indexOf('R')]
            }
        }
    }

    for (let match of horizontal.matchAll("(p[.]*R)")) pawnCount++;
    for (let match of horizontal.matchAll("(R[.]*p)")) pawnCount++;
    for (let match of vertical.matchAll("(p[.]*R)")) pawnCount++;
    for (let match of vertical.matchAll("(R[.]*p)")) pawnCount++;
    
    return pawnCount;
};