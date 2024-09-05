

// Rest parameter

function sum(...numbers) {
    // console.log(numbers);
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3)); // 6