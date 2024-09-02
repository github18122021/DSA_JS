
let arr = [1,2,3,4,5,6,7,8,9];

let executed_times = 0;
function binarySearch(arr, target) {
    
    if(arr.length  < 1) {
        return "Provided arr is not valid"
    }
    
    let start_index = 0;
    let end_index = arr.length - 1;

    while(start_index <= end_index) {
        executed_times += 1;
        let mid_index = Math.floor((start_index + end_index) / 2);
        if(arr[mid_index] === target) {
            return mid_index;
        } else if(arr[mid_index] < target) {
            start_index = mid_index + 1;
        } else {
            end_index = mid_index - 1;
        }
    }

    
    return -1;
}

let check_01 = binarySearch(arr, 3);

console.log(check_01);
console.log(arr[check_01]);
console.log(executed_times);