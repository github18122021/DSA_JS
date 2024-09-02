var reverse = function(x) {
    let max_range = Math.pow(2, 31) - 1;
    let min_range = -Math.pow(2, 31);

    console.log(max_range);
    console.log(min_range);

    if((min_range <= x) && (max_range >= x)) {

        if(x < 0) {
            // let [sign, ...temp_num] = temp_str.split('');
            x = Math.abs(x);
            let temp_str = String(x);

            temp_num = temp_str.split('');
            temp_num.reverse();
            
            temp_num = temp_num.join('');
            let reversedNum = -(Number(temp_num));

            if((reversedNum < min_range) || (reversedNum > max_range)) {
                return 0;
            } 

            return reversedNum;

        } else {
            let temp_str = String(x);

            let temp_num = temp_str.split('');

            temp_num.reverse();
            temp_num = temp_num.join('');
            let reversedNum = Number(temp_num);

            if((reversedNum < min_range) || (reversedNum > max_range)) {
                return 0;
            }
            return reversedNum;;
        }

    } else {
        return 0;
    }
};

console.log(reverse(-53));

// documentation: new String() takes memory, due to being wrapper object wrapping the value in object. objects are heavy in memory
// string interpolation is efficient