

let arr = [1,2,3,4,5,6];
let arr_02 = [1,2,3,4,5,6,7,8,9,10,11,12];

// using recursion, keep removing the last element of the array and add it to the sum
function recursive_sum(array) {
    let arr = [...array];
    let sum = 0;
    if(arr.length > 1) {
        sum += arr.pop() + recursive_sum(arr);
    } else {
        sum += arr[0];
    }


    console.log(sum);
    return sum;
}

// using a for loop, iterate through the array and add each element to the sum
function linear_sum(arr) {
    let sum = 0;
    let executed_times = 0;

    for(let element of arr) {
        sum += element;
        executed_times++;
    }

    console.log(executed_times);
    return sum;
}

console.log(recursive_sum(arr));
console.log(linear_sum(arr));

console.log(recursive_sum(arr_02));
console.log(linear_sum(arr_02));

let i = 0;
let j = 0;

// using recursion, keep removing the first element of the array and add it to the sum
function recursive_sum_02(arr) {
    i++;

    let sum = 0;
    if(arr.length > 1) {
        j++;
        let [first, ...remainingArray] = arr;
        sum += first + recursive_sum_02(remainingArray);
    } else {
        return sum += arr[0];
    }

    return sum;
}


// console.log(recursive_sum_02(arr));
console.log(i);
console.log(recursive_sum_02(arr_02));
console.log(i);
console.log(j);

