// <!-- https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true -->

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let alice_score = 0;
    let bob_score = 0;

    for(let i = 0; i < a.length; i++) {

        if(a[i] > b[i]) {
            alice_score++;
        } else if(a[i] === b[i]) {
            continue;
        } else {
            bob_score++;
        }
    }

    return [alice_score, bob_score];
}