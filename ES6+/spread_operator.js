

// spread operator

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);

console.log(result); // 6