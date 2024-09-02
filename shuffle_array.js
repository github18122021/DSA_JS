
let arr = [1,2,3,4,5,6,7,8,9,10];

function shuffle_array(arr) {
    let shuffled_array = new Array(arr.length);
    let randomIndex;

    for(let element of arr) {
        randomIndex = Math.floor(Math.random() * arr.length);

        while(shuffled_array[randomIndex] !== undefined) {
            randomIndex = Math.floor(Math.random() * arr.length);
        }

        shuffled_array[randomIndex] = element;
    }

    return shuffled_array;
};


console.log(shuffle_array(arr));


// time complexity: O(n*2)