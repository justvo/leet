/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const n = customers.length;
    const grumpyCustomers = Array(n + 1).fill(0);
    let result = grumpyMax = 0;

    for (let index = 0; index < n; index++) {
        const customer = customers[index];

        grumpyCustomers[index + 1] = grumpyCustomers[index]; 
        grumpy[index]
            ? grumpyCustomers[index + 1] += customer
            : result += customer;

        if (index - minutes + 1 < 0) continue;
        grumpyMax = Math.max(grumpyMax, grumpyCustomers[index + 1] - grumpyCustomers[index - minutes + 1]);
    }
    return result + grumpyMax;
};