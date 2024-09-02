// https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem?isFullScreen=true


function even_fibonacci_numbers(n){
    let fib_first = 1;
    let fib_second = 2;

    let even_sum = 2;

    if(n <= 2) {
        return;
    }


    while(true) {
        let currentFib = fib_first + fib_second;

        // logic: if it is bigger than n, then even number found will be bigger than the n itself.
        if(currentFib > n) {
            break;
        }

        if(currentFib % 2 === 0) {
            even_sum += currentFib;
        }

        [fib_first, fib_second] = [fib_second, currentFib];
    }

    // while(even < n) {
    //     let currentFib = fib_first + fib_second;

    //     if(currentFib % 2 === 0) {

    //         if(currentFib + even > n) {
    //             break;
    //         }

    //         even += currentFib;
    //     }


        
    //     [fib_first, fib_second] = [fib_second, currentFib];
    // }

    return even_sum;
}

// 1,2,3,5,8
console.log(even_fibonacci_numbers(2));
console.log(even_fibonacci_numbers(10));
console.log(even_fibonacci_numbers(100));