let arr = [1,2,3,4,5];

let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// arr: [2,1,3,4,5];

console.log(arr);

// swap elements using destructuring assignment
[arr[2], arr[3]] = [arr[3], arr[2]];

console.log(arr);