let arr_01 = [1,2,3,4,5,6,7,8,9];

// using built-in method
// function reverse_array(arr) {
//     return arr_01.reverse();
// }

reverse_array(arr_01);

console.log(arr_01);


function reverse_array(arr) {


    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        
        // optimized in the case of being the same element
        if(arr[i] === arr[arr.length -1 - i]) {
            console.log(`Same element ${arr[i]} ${arr[arr.length -1 - i]}`);
            continue;
        }

        // only swap the elements if those elements are not the same
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

let arr_02 = [1,2]

reverse_array(arr_02);

console.log(arr_02);


// again

function reverse_array_again(arr) {

    for(let i = 0; i < Math.floor(arr.length /2); i++) {

        // arr.length = number of elements
        // last element: arr.length - 1
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length -1 -i] = temp;
    }
}

reverse_array_again(arr_02);

console.log(arr_02);