

let numbers = [1, 2, 3, 4, 5, 6];

let [one, two, three] = numbers;

console.log(one);
console.log(two);
console.log(three);

// destructuring arrays with default values
// rest operator
let [first = 10, second = 20, third = 30, fourth = 40, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(rest);