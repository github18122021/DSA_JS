// https://leetcode.com/problems/multiply-strings/


// var multiply = function(num1, num2) {
//     num1 = BigInt(num1);
//     num2 = BigInt(num2);
//     let result = (Number(num1 * num2)).toString();

//     console.log(result)
//     return result;
// };

var multiply = function(num1, num2) {
    return `${(BigInt(num1) * BigInt(num2))}`;
};

console.log(multiply("2", "3")); 