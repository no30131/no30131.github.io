/*  1. max: find the max value of an array of numbers
    2. findPosition: find the first position 
        of the target number inside an array of numbers.
        The position should be counted starting from 0, 
        if you can't find the target, please return -1            */

function max(numbers) {
    // your code here, for-loop method preferred
    // 使用 for 迴圈遍歷陣列並比較是否有更大的數字，若有就記到 maxNumber
    let maxNumber = numbers[0]; // 預設最大數為陣列第一位數
    for (let i = 0; i < numbers.length; i++ ) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    } 
    return maxNumber;
}

function findPosition(numbers, target) {
    // your code here, for-loop method preferred
    // 使用 for 迴圈遍歷陣列，找到與 target 相符的值就停止並回傳索引值
    for (let i = 0; i < numbers.length; i++ ) {
        if (target === numbers[i]) {
            return i;
        }
    }
    // 如果遍歷結束還沒找到相符值，回傳 -1
    return -1;
}

console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1