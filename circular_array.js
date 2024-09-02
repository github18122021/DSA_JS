
// k: an integer, representing the number of times rotation

// [1,2,3];
// [3,1,2]; r1 +1 index
// [2,3,1]; r2 +2 index
// [1,2,3]; r3 +3 index

// that means if array of 3 elements to rotating 30 times will give the same array back [1,2,3]; so no need to rotate
// if 32, then 32 % 3 = 2; (10 * 3 = 30)

// if arr.length = 5;
// assume that rotation is 72,
// 14 * 5 = 70, so only rotation is 2 times needed

// 2 times rotation means
// index + 2; 
// edge cases: if it is the last element: start from zero


// function circular_array_rotation(k, arr) {

//     // for(let i = 0; i <= k; i++) {

//     // }

//     let array_01 = [1,2,3,4,5];
//     let rotation_needed = 2;
//     let tempArray = [];

//     for(let i = 0; i < array_01.length; i++) {

//         // case exceed 
//         // length: 5
//         // 3 + 2;
//         // 5 > 4 ? 
//         // diff: 1
//         // arr[1 - 1] = arr[0] = elem
//         if(i + rotation_needed > array_01.length - 1) {
//             let diff =  (i + rotation_needed) - array_01.length;
            
//             tempArray[diff] = array_01[i];
//         } else {
//             // length: 5
//             // 2 + 2
//             tempArray[i + 2] = array_01[i];
//         }
//     }

//     return tempArray;
// }

// console.log(circular_array_rotation(1,[1,2]));

function circular_array_rotation(k, arr) {

    // validations
    // assuming that k is always greater than arr.length;
    // assuming that arr.length is always greater than zero; and one cause anything with one will give remainder zero if it is a whole number
    // let rotation_needed = k % arr.length;

    let rotation_needed;
    if(k > arr.length) {
        rotation_needed = k % arr.length;
        // if arr.length one, then rotation_needed = 0; as no need to rotate for one element
        // logic: if array of 3 elements to rotating 30 times will give the same array back [1,2,3]; so no need to rotate
        // 33 % 3 = 0;
        // 35 % 3 = 2; 2 times only to rotate
        
    } else {
        rotation_needed = k;
    }

    if(rotation_needed === 0) {
        return arr;
    }

    let tempArray = [];

    for(let i = 0; i < arr.length; i++) {
        
        // console.log(i)
        // edge case: exceeding an array
        if((i + rotation_needed) > arr.length - 1) {
            let diff = (i + rotation_needed) - (arr.length - 1);

            tempArray[diff - 1] = arr[i];
        } else {

            tempArray[i + rotation_needed] = arr[i]; 
        }
    }

    return tempArray;
}

// console.log(circular_array_rotation(33, [0]))
// console.log(circular_array_rotation(10000000000000000000000000000000000, [1,2,3,4,5]))
console.log(circular_array_rotation(17, [1,2,3,4,5,6,7,8]))