/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    let totalDistance = distance.reduce((a, b) => a + b, 0);
    let clockwiseDistance = 0;

    let begining = Math.min(start, destination);
    let finish = Math.max(start, destination);

    for (let i = begining; i < finish; i++) {
        clockwiseDistance += distance[i];
    }

    let counterclockwiseDistance = totalDistance - clockwiseDistance;

    return Math.min(clockwiseDistance, counterclockwiseDistance);
};