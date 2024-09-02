
// features
// fixed size: similar to new Array(num)    

// class myArray {
//     #length;
//     #data;

//     constructor(num) {

//         if(num === undefined) {
//             this.#data = new Array(0);
//             this.#length = 0;
//             return this.#data;
//         }

//         this.#data = new Array(num);
//         this.#length = num;
//         return this.#data;

//     }
    
// }



// class myArray extends Array{

//     constructor() {
//         super();
//     }


    
//     // shift() {
//     //     throw new Error("Not implemented");
//     // }

//     // unshift() {
//     //     throw new Error("Not implemented");
//     // }

//     // push(value) {
//     //     throw new Error("Not implemented");
//     // }

//     // pop() {
//     //     throw new Error("Not implemented");
//     // }
// }

// let arr = new myArray();
// console.log(arr);
// console.log(arr.length);
// console.log(arr.push(1))


// console.log(arr.push(2));
// try {
//     arr.push(10);
// } catch(e) {
//     console.log(e.message);
// }


// building customized methods
class MyArray {
    #length = 0;

    constructor() {
        this.data = {};
    }

    add(value) {
        if(this.#length === 0) {
            this.data[this.#length] = value;
            return ++this.#length;
        }

        if(this.#length > 0) {
            
            let firstElement = this.data[0];

            if(typeof firstElement === typeof value) {
                this.data[this.#length] = value;
                return ++this.#length;
            } else {
                throw new Error("Type mismatch");
            }
        }
    }

    remove() {
        if(this.#length === 0) {
            return "Array is empty";
        }

        if(this.#length > 0) {
            delete this.data[this.#length - 1];
            return --this.#length;
        }
    }

    removeByIndex(index) {
        if(this.#length === 0) {
            return "Array is empty";
        }

        if(this.#length > 0) {
            if(index < 0 || index > this.#length) {
                return "Index out of range";
            }
            
            delete this.data[index];

            for(let key in this.data) {
                if(key > index) {
                    let temp = this.data[key];
                    delete this.data[key];
                    this.data[key - 1] = temp;
                }
            }
            return --this.#length;
        }
    }

    removeByValue(value) {
        if(this.#length === 0) {
            return "Array is empty";
        }

        if(this.#length > 0) {
            if(typeof value !== typeof this.data[0]) {
                return "Type mismatch";
            }

            let tempKey = -1;
            for(let key in this.data) {
                if(this.data[key] === value) {
                    tempKey = key;
                    break;
                }
            }

            if(tempKey === -1) {
                return "Value not found";
            }

            delete this.data[tempKey];
            this.#length--;

            for(let key in this.data) {

                if(key > tempKey) {
                    let tempValue = this.data[key];
                    delete this.data[key];
                    this.data[key - 1] = tempValue;
                }

            }

            return this.#length;
        }
    }

    get size() {
        return this.#length;
    }
}

let arr = new MyArray();
// console.log(arr.add(1));
// console.log(arr.data)
// console.log(arr.add(2));
// console.log(arr.data);
// console.log(arr.size);
// console.log(arr.remove(2));
// console.log(arr.size)
arr.add(0);
arr.add(1);
arr.add(2);
console.log(arr.data);
console.log(arr.removeByIndex(1))
console.log(arr.data);


// console.log(arr.add("hello"));

let arr_01 = new MyArray();

for(let i = 0; i < 100; i++) {
    arr_01.add(i);
}

console.log(arr_01.data);
console.log(arr_01.size);


// console.log(arr_01.removeByIndex(0));
// console.log(arr_01.size);
// console.log(arr_01.data);

console.log(arr_01)
console.log(arr_01.size);
console.log(arr_01.removeByValue(50));
console.log(arr_01.data);
console.log(arr_01.size)

console.log(arr_01.data[49]);


