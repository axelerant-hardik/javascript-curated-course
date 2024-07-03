// Create a function called sum that can accept any number of arguments
// and return the sum of the arguments.
function sumUsingArguments() {
    let sum = 0;
    for (let value of arguments) {
        if (checkIsNumber(value)) {
            sum += value;
        }
    }
    return sum;
}

function sumUsingRestOperator(...args) {
    return args.reduce((a, b) => {
        return checkIsNumber(b) ? a + b : a;
    });
}

function checkIsNumber(value) {
    return typeof value === 'number';
}

console.log(sumUsingArguments(1, 2, 3, 4));
console.log(sumUsingRestOperator(1, 2, 3, 4));
console.log(sumUsingArguments(10, 20, 'Hi', true, { value: 100 }));
console.log(sumUsingRestOperator(10, 20, 'Hi', true, { value: 100 }));
