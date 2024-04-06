/*   Binary Search   */

function binarySearchPosition(numbers, target) {
    // your code here
    let left = 0; // 陣列起點索引值為 0
    let right = numbers.length - 1; // 計算陣列終點索引值

    while (left <= right) {
        let mid = Math.round((left + right) / 2); 
        // 計算陣列中間索引值，若出現小數點就四捨五入
        
        // 先比較中間值，再判斷要繼續往前(左)或往後(右)
        if (target === numbers[mid]) {
            return mid;
        } else if (target < numbers[mid]) {
            right = mid - 1;
            // console.log(`right=${right}`);
        } else {
            left = mid + 1;
            // console.log(`left=${left}`);
        }
    }
    return -1; // 若往左往右都找不到就返回 -1
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); 
// should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); 
// should print 3
