

function selection_sort(arr) {
    // let n = 0;
    // let k = 0;

    if(arr.length === 0) {
        throw new Error("Please provide a valid array!");
    }

    if(arr.length === 1) {
        return arr[0];
    }

    for(let i = 0; i < arr.length; i++) {
        // n++;

        for(let j = i + 1; j < arr.length; j++) {
            // k++;
            //  ((n + 1) * n) / 2; [n = 9] element: 10, [executions: 9. executions: 8, ....]
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                // k++;
            }
        }
    }

    // console.log(k);
    // console.log(n);
    console.log(arr);
    return arr;
}

for(let i = 0; i < 10; i++) {
    let arr = [];

    for(let j = 0; j < 10; j++) {

        let random = Math.floor(Math.random() * 101);

        arr.push(random);
    }

    selection_sort(arr);
}

