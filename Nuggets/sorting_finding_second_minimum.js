
let arr_01 = [10,9,8,7,6];

// function find_second_minimum(arr) {

//     arr.sort((a, b) =>  a - b);

//     return arr[1];
// }

console.log(find_second_minimum(arr_01));

// manual instead of traditional for loop:

function find_second_minimum(arr) {
    let temp;
    let secondTemp;

    for(let element of arr) {

        if(temp === undefined && secondTemp === undefined) {
            temp = element; 
            console.log(temp) 
            continue;
        }

        if(temp !== undefined && secondTemp === undefined) {
            
            if(element < temp) {
                secondTemp = temp;
                temp = element;
                continue;
            }

            secondTemp = element;
            continue;
        }

        if(element < temp) {
            secondTemp = temp;
            temp = element;
        } else if (element > temp && element < secondTemp) {
            secondTemp = element;
        } else {
            continue;
        }
    }

    return secondTemp;
}

console.log(find_second_minimum([1,4,5,3,6,6,7,7]))

// using traditional for loop:


function find_second_minimum_02(arr) {
    
    if(!arr.length) {
        throw new Error("Please provide a valid array");
    } else if(arr.length < 2) {
        return arr[i];
    } else if(arr.length == 2) {
        
        // max value between two values is the second minimum
        return (arr[0] > arr[1] ? arr[0] : arr[1]);
    }

    // when array has always more than two elements
    let mostMin = arr[0];
    let secondMin = arr[1];

    for(let i = 2; i < arr.length; i++) {

        if(arr[i] < mostMin) {
            secondMin = mostMin;
            mostMin = arr[i];
        } else if(arr[i] > mostMin && arr[i] < secondMin) {
            secondMin = arr[i];
        } 
    }

    return secondMin;
}

console.log(find_second_minimum_02([1,2,3,4,5,6,1,2,3,4,-1,-2,-3]));
console.log(find_second_minimum_02([-8,-9]));