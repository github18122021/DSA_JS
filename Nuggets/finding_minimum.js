
let arr_01 = [2,3,4,5,5,6,7,1]

function finding_minimum(arr) {
    let temp = arr[0];

    for(i = 1; i < arr.length; i++) {
        if(arr[i] < temp) {
            temp = arr[i];
        }
    }

    if(arr.length < 1) {
        throw new Error("Please provide a valid array!");
    }

    return temp;
}

function finding_minimum_02(arr) {
    if(!arr.length) {
        throw new Error("Please provide a valid array!");
    }
    
    return Math.min(...arr);
}

// time complexity: O(n)

console.log(finding_minimum([1]));
console.log(finding_minimum_02(arr_01));

