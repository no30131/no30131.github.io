/*  Given an array of integers, return indices of 
    the two numbers such that they add up to aspecific target. 
    You may assume that each input would have exactly 
    one solution, and you may not use the same element twice.   */


function twoSum(nums, target) {
    /* 自己先嘗試寫，有些錯誤：Map沒有include，應該用has
       誤把數字做為key，應該要作為value的，索引才是key */

    // const numMap = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (numMap.include(target - nums[i])) {
    //         return nums[i];
    //     } else {
    //         numMap.set(nums[i], target - nums[i]);
    //     }
    // }

    // 問 gpt 後改成這樣，時間複雜度為 O(n)線性，因為要遍歷陣列
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const result = target - nums[i];
        // console.log(`result: ${result}`);
        if (numMap.has(result)) {
            // console.log("get", result, i);
            // console.log(numMap);
            return [numMap.get(result), i];
        } else {
            numMap.set(nums[i], i);
            // console.log("set", result);
            // console.log(numMap);
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

/*  For example:
    twoSum([2, 7, 11, 15], 9);
    
    Should returns:
    [0, 1]
    
    Because:
    nums[0] + nums[1] is 9    */
    