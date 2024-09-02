// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one


function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);

    let min_sum = 0;
    let max_sum = 0;

    for(let i = 0; i < arr.length - 1; i++) {
        min_sum += arr[i];
    }

    for(let j = arr.length - 1; j > 0; j--) {
        max_sum += arr[j];
    }

    return `${min_sum} ${max_sum}`;
}

console.log(miniMaxSum([5,4,3,2,1]));