

// class myArray {
    
//     constructor() {
//         this.myArray = [];
//     }

//     // map like functionality

//     myMap(fn) {

//         for(let i = 0; i < this.myArray.length; i++) {
//             let element = this.myArray[i];

//             let result = fn(element, i, this.myArray);

//             if(result !== undefined) {
//                 this.myArray[i] = result;
//             }
//         }
//     }
// }

// let array_01 = new myArray();

// console.log(array_01.myArray.push(1,2,3,4,5,6,7))

// console.log(array_01);

// array_01.myMap((element, index, array) => {
//     return element * 2;
// })

// console.log(array_01);

// making it more elegant

// building my own version of built in methods
class myArray extends Array {

    constructor() {
        super();
    }

    // myForEach

    myMap(fn) {
        // returns a new traversed array 
        let returnedArr = [];


        for(let index = 0; index < this.length; index++) {
            let element = this[index];
            let array = this;

            let result = fn(element, index, array);
            if(result !== undefined) { 
                returnedArr.push(result);
            } 
        }

        return returnedArr;
    }

    myFilter(fn) {
        // returns a new filtered array 
        let returnedArr = [];

        for(let index = 0; index < this.length; index++) {
            let element = this[index];
            let array = this;

            let result = fn(element, index, array);

            if(result === true) {
                returnedArr.push(element);
            } else {
                continue;
            }
        }

        return returnedArr;
    }

    myEvery(fn) {
        // returns a boolean value true if all elements in the array pass the test
        // otherwise false

        for(let index = 0; index < this.length; index++) {
            let element = this[index];
            let array = this;

            let result = fn(element, index, array);

            if(!result) {
                return false;
            }
        }

        return true;
    }

    
    
}

let arr_01 = new myArray();
arr_01.push(1,2,3,4,5,6,7,8,9);

let traversed_array = arr_01.myMap((element, index, array) => {
    // console.log(element);
    // console.log(index);
    // console.log(array);

    return element * 1/2;
})

console.log(traversed_array);

let filtered_array = arr_01.myFilter((element, index, array) => {

    return (element % 2 === 0);
})

console.log(filtered_array);

// is every elements pass the test?
let arr_03 = arr_01.myEvery((element, index, array) => {

    return (typeof element === 'number');
});

console.log(arr_03);
