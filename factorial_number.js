 

function factorial_number(num1) {

    // by convention 0! = 1;
    if(num1 == 0) {
        return 1;
    }

    // let result = 1;
    // for(let i = num1; i > 1; i--) {
    //     result *=  i;
    // }


    let result = 1;
    for(let i = result; i <= num1; i++) {
        result *= i;
    }

    return result;
}

  
console.log(factorial_number(5)); 
console.log(factorial_number(100)); 
console.log(factorial_number(1000));

// time complexity: O(n)