// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true


function pangrams(s) {
    let all = "abcdefghijklmnopqrstuvwxyz";
    s = s.toLowerCase();

    for(let letter of all) {
        if(!(s.includes(letter))) {
            return "not pangram";
        }
    }

    return "pangram";
}


console.log(pangrams("We promptly judged antique ivory buckles for the prize"));