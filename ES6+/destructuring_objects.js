
let user = {
    name: "john",
    location: "USA",
}

let {name, location} = user;

console.log(name); // john
console.log(location); // USA

// Destructuring objects with different variable names

let {name: user_name, location: user_location} = user;

console.log(user_name); // john
console.log(user_location); // USA

// Destructuring objects with default values

let {name: user_name2, location: user_location2, age = 25} = user;

console.log(user_name2); // john
console.log(user_location2); // USA
console.log(age); // 25

// destructing objects with different variable names and default values

let {name: user_name3, location: user_location3, age: user_age = 25} = user;

console.log(user_name3); // john
console.log(user_location3); // USA
console.log(user_age); // 25