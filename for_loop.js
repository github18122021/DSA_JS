
let i_executed = 0;
let j_executed = 0;

let n = 11;

for (let i = 0; i < n; i++) {
    i_executed += 1;

    for(let j = 0; j < n; j++) {
        console.log(i, j);

        j_executed +=1;
    }
}

console.log(Math.pow(n,2));

console.log("i executed: ", i_executed);
console.log("j executed", j_executed);

