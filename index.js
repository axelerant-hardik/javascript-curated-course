// Count the occurences of an element of array.
function countOccurences(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurences = currentValue === searchElement ? 1 : 0;
        return accumulator + occurences;
    }, 0);
}

const numbers = [1, 2, 3, 4, 1, 1];
console.log(countOccurences(numbers, 2));
console.log(countOccurences(numbers, 1));
console.log(countOccurences(numbers, -1));
