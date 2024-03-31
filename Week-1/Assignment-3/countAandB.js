function countAandB(input) {
    return input.reduce((accumulator, currentValue) => {
        if (currentValue === 'a' || currentValue === 'b') {
            accumulator = accumulator + 1;
        }
        return accumulator;
    }, 0); 
}
    
function toNumber(input) {
    const toNumberMap = {};
    const startChar = 'a'.charCodeAt(0);

    for (let i = 0; i < 26; i ++){
        toNumberMap[String.fromCharCode(startChar + i)] = i + 1;
    }

    return input.map(char => toNumberMap[char] || char);
}
    
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
    
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]