/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if (n == 1) return 1;

    const degress = new Array(n + 1).fill(0);

    for (const t of trust) {
        degress[t[0]]--;
        degress[t[1]]++;
    }

    for(let i=0; i<degress.length; i++){
        if(degress[i] == n-1) return i
    }
    return -1

};