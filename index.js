// Check if an element exists in an array.
function includes(array, searchElement) {
    for (let value of array) {
        if (value === searchElement) {
            return true;
        }
    }
    return false;
}

const array1 = [1, 2, 3, 4];
const array2 = ['Hi', 'Hello', true, new Date(), { greet: 'Namaste' }];

console.log(includes(array1, 3));
console.log(includes(array1, '3'));
console.log(includes(array2, false));
console.log(includes(array2, true));
console.log(includes(array2, 'Hi'));
console.log(includes(array2, 'Namaste'));
