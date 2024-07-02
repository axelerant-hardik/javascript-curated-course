// Get the maximum number from an array of numbers.
function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((accumulator, currentValue) => {
        return currentValue > accumulator ? currentValue : accumulator;
    })
}

const numbers = [1, 3, 5, 22, 7, 11, 9];
console.log(getMax(numbers));
