let arr = [0,3,2,1,4,6,5,1,2,-1];



// How it works:

//     Go through the array to find the lowest value.
//     Move the lowest value to the front of the unsorted part of the array.
//     Go through the array again as many times as there are values in the array.

let j_executed = 0;

function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        // edge case

        if(arr.length === 1) {
            return arr;
        }

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            j_executed += 1;
        }
        
    }

    return arr;

}

let check_01 = selectionSort(arr);
let check_02 = selectionSort([1,2,3,4,5,6,7,8,9,10]);

console.log("arr: ", arr.length);
console.log("j executed: ", j_executed);

console.log(check_01);
console.log(check_02);

