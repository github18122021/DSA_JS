

let arr_01 = [1,2,3,4,5,6,7,8,9,10];


function shuffle_array_optimized(arr) {

    for(let i = 0; i < arr.length; i++) {

        const j = Math.floor(Math.random() * arr.length);

        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

console.log(shuffle_array_optimized(arr_01));

// time complexity: O(n)