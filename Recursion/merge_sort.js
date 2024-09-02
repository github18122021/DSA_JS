

function merge_sort(arr)  {
    if(arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    merge_sort(left);
    merge_sort(right);

    return merge(left, right, arr);
}

function merge(left, right, arr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            arr[outputIndex++] = left[leftIndex++];
        } else {
            arr[outputIndex++] = right[rightIndex++];
        }
    }

    for(let i = leftIndex; i < left.length; i++) {
        arr[outputIndex++] = left[i];
    }

    for(let i = rightIndex; i < right.length; i++) {
        arr[outputIndex++] = right[i];
    }

    return arr;
}

let arr = [5,4,3,2,1];
console.log(merge_sort(arr));
