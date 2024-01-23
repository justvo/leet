/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let max_val = logs[0][1], id = logs[0][0];
    for (let i = 1; i < logs.length; i++) {
        let time_req = logs[i][1] - logs[i - 1][1];
        if (time_req >= max_val) {
            if (time_req == max_val) {
                id = Math.min(id, logs[i][0]);
            } else {
                max_val = time_req;
                id = logs[i][0];
            }
        }
    }
    return id;
};