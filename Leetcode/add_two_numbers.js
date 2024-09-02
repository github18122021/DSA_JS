

// function addTwoNumbers(l1,l2) {
//     l1 = l1.reverse().join("");
//     l2 = l2.reverse().join("");

//     let result = Number(l1) + Number(l2)
//     result = result.toString().split("").reverse();
//     // result = result.map(Number);
//     result = result.map((element) => Number(element))
    
//     return result;
// }

function addTwoNumbers(l1, l2) {
    let list_1 = "";
    let list2 = ""

    // reverse the list
    for(let i = 0; i < Math.floor(l1.length /2); i++) {
        let temp = l1[i];
        l1[i] = l1[l1.length - i - 1];
        l1[l1.length - i - 1] = temp;
    }

    // reverse the list
    for(let i = 0; i < Math.floor(l2.length /2); i++) {
        let temp = l2[i];
        l2[i] = l2[l2.length - i - 1];
        l2[l2.length - i - 1] = temp;
    }

    l1 = l1.join("");
    l2 = l2.join("");
    console.log(l1);
    console.log(l2)

    let result = Number(l1) + Number(l2);
    console.log(result);

    result = `${result}`.split("")
    result = result.map(Number);
    return result;
}

console.log(addTwoNumbers([2,4,3], [5,6,4]));