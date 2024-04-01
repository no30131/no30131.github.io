function countAandB(input) {
    return input.reduce((accumulator, currentValue) => {
        if (currentValue === 'a' || currentValue === 'b') {
            accumulator = accumulator + 1;
        }
        return accumulator;
    }, 0); 
}
    
function toNumber(input) {
    const startChar = 'a'.charCodeAt(0);

    return input.map(char => {
        const charCode = char.charCodeAt(0);
        return (charCode >= startChar && charCode < startChar +26) ? charCode - startChar + 1 : char;
    });
}
    
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
    
let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]