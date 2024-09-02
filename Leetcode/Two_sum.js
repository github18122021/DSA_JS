

// var twoSum = function(nums, target) {
    
//     for(let i = 0; i < nums.length; i++) {
//         let temp_num = nums[i];

//         if(temp_num >= target) {
//             continue;
//         }

//         let j = nums.indexOf(Math.abs(target - temp_num));


//         if(j !== -1 && i !== j) {
//             return [i, j];
//         }
//     }
// };

function twoSum(nums, target) {
    let obj = {};

    for(let i = 0; i < nums.length; i++) {

        let rest = Math.abs(target - nums[i]);
        let temp_num = nums[i];

        if(obj.hasOwnProperty(rest)) {
            return [i, obj[rest]];
        }

        obj[temp_num] = i;
    }

    console.log(obj)

    return [];
}

// complement: indices
// 3(6-3): 0
// 4(6-2): 1
// 2(6-4): 2
console.log(twoSum([3,2,4], 6));