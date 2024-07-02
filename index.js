// Remove elements from an array based on the values from another array.
// Eg: originalArray = [1, 2, 3]; removeArray = [2]
// Output: [1, 3]
function except(originalArray, exceptArray) {
    return originalArray.filter((element) => {
        return !exceptArray.includes(element);
    });
}

const arr = [1, 2, 3, 4, 1, 1];
const remove = [3];
const removeAnother = ['Hi'];
const removeMultiples = [1, 2];
console.log(except(arr, remove));
console.log(except(arr, removeAnother));
console.log(except(arr,removeMultiples));
