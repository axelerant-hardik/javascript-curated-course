// Count the number of truthy values in an array.
function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) {
            count += 1;
        }
    }
    return count;
}

const array = [1, '', 2, 'Hardik', undefined, {name: 'Pandya'}, NaN, '1', true];
console.log(countTruthy(array));
