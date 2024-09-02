
let arr_01 = [1,2,3,4,5,6,7,8,9];

// function remove_even(arr) {
//     let tempArr = [];

//     for (let element of arr) {
//         if(element % 2 == 0) {
//             tempArr.push(element);
//         }
//     }

//     return tempArr;
// }

let check_01 = remove_even(arr_01);

console.log(check_01);

// extra 

// bitwise & operator to check evenness
console.log((4 & 1) === 0)
console.log(1 & 3);
console.log(1 & 2);
console.log(2 & 6);
console.log(6 & 6)



let arr_02 = [1,2,3];
// using splice to remove an element of array
// arr_02.splice(1,1);
arr_02.splice(0, 2, 2, 3,4);

console.log(arr_02);

// optimized
function remove_even(arr) {
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] & 1) === 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

// 

// In binary representation, an odd number always has LSB as 1, while an even number always has LSB as 0.
// In binary representation, the least significant bit (LSB) of an even number is always 0, and for an odd number, it's always 1.
// If we perform a bitwise AND operation between any number and 1 (number & 1), the result will be 0 if the LSB of the number is 0 (even), and it will be 1 if the LSB is 1 (odd).