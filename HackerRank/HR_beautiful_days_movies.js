// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true


function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDays = 0;

    for(let m = i; m <= j; m++) {
        let reversed_num = m.toString().split("").reverse().join("");

        let diff = Math.abs((m - reversed_num) / k);

        if(diff % 1 === 0) {
            beautifulDays++;
        }
    }

    // while (temp <= j) {
    //     let reversedNumber = temp.toString().split("").reverse().join("");

    //     console.log(reversedNumber)
    //     let diff = Math.abs((i - reversedNumber) / k);

    //     if(diff % 1 === 0) {
    //         beautifulDays++;
    //     }

    //     temp++;
    // }

    return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
