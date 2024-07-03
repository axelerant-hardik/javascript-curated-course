// Implement try catch to handle error.
function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Please pass array as the function argument.');
    }

    return array.reduce((accumulator, currentValue) => {
        const occurences = currentValue === searchElement ? 1 : 0;
        return accumulator + occurences;
    }, 0);
}

const numbers = [1, 2, 3, 4, 1, 1];
try {
    console.log(countOccurences(numbers, 2));
}
catch (e) {
    alert(e);
}

try {
    console.log(countOccurences(true, 1));
}
catch (e) {
    alert(e);
}
