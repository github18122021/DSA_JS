

// arr: [5,4,3,2,1];
// arr: [5,2,1,4,3]

function insertion_sort(arr) {

    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1
        for(; j >= 0 ; j--) {
            
            
            // move the bigger element than the current element to the right side
            if(arr[j] > temp) {
                arr[j + 1] = arr[j];
            } else {
                // if it is not, then break and put cherry picked temp element
                break;
            }

        }

        arr[j + 1] = temp;
        
        
    }

    return arr;
}

console.log(insertion_sort([5,4,3,2,1]));
console.log(insertion_sort([8,7, 8, 7, 8, 6,1,2,3,4]))