// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem?isFullScreen=true



// function hackerrankInString(s) {
//     // Write your code here
//     let hackerank = "hackerrank";
//     // a: 2. k: 2,r:2
//     s= s.toLowerCase();
//     let result;
    
//     for(let letter of hackerank) {
//         let temp_index = s.indexOf(letter);
        
//         if(temp_index !== -1) {
//             s = s.slice(0, temp_index) + s.slice(temp_index + 1);
//             // console.log(s);
//             // continue
//         } else {
//             return "NO";
//         }
    
//     }
    
//     return "YES";

// }

// has to appear in an order

function hackerrankInString(s) {
    // Write your code here
    let hackerank = "hackerrank";
    // a: 2. k: 2,r:2
    s= s.toLowerCase();
    let result;
    
    for(let letter of hackerank) {
        let temp_index = s.indexOf(letter);
        
        if(temp_index !== -1) {
            s = s.slice(temp_index + 1);
            // console.log(s);
            // continue
        } else {
            return "NO";
        }
    
    }
    
    return "YES";

}

console.log(hackerrankInString("hackerrank"));
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
