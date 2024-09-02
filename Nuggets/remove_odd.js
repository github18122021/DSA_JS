let arr_01 = [1,2,3,4,5];

function remove_odd(arr) {
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] & 1) === 1) {
            arr.splice(i, 1);
        }
    }

    return arr;
}


remove_odd(arr_01);

console.log(arr_01);