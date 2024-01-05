/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const hash = {};

    let pairs = 0;

    for (const domino of dominoes) {
        const [a, b] = domino;
        if ([b, a] in hash) {
            hash[[b, a]]++;
        } else if ([a, b] in hash) {
            hash[[a, b]]++;
        } else hash[[a, b]] = 0;
    }

    console.log(hash)

    for (const domino in hash) {
        if (hash[domino] > 0) pairs += hash[domino] * (hash[domino] + 1) / 2;
    }

    console.log(pairs)

    return pairs;
};