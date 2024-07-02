// Pass min and max and create an array with this range of values.
function arrayFromRange(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(arrayFromRange(1, 5));
console.log(arrayFromRange(-8, -2));
console.log(arrayFromRange(-1, 3));
