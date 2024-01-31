/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const d = new Date(`${month},${day},${year}`);
    let dayy = d.getDay()
    return days[dayy]
};