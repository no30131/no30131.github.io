/*  1. count: return an object which shows 
              the count of each character.
    2. groupByKey: return an object which 
              shows the summed-up value of each key.    */

function count(input) {
    // your code here
    return input.reduce((times, key) => {
        if (times[key]) {   // 檢查這個 key 是否已在 times 中計算過
            times[key]++;   // 如果有的話就將計數 + 1
        } else {            
            times[key] = 1; // 如果沒有的話就設 1，代表初始計數
        }
        return times;
    }, {});
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
    // your code here
    return input.reduce((times, item) => {
        if (times[item.key]) {   // 檢查是否已計算過這個 key 值
            times[item.key] += item.value; // 若有，將 value 加進對應的 key
        } else {                 // 若還沒計過，將 value 初始化給對應的 key
            times[item.key] = item.value; 
        }
        return times;
    }, {});
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];

console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
    