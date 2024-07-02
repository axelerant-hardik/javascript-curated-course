// Move element of an array based on passed index and offset.
function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const element = array.splice(index, 1)[0];
    array.splice(position, 0, element);
    return array;
}

const numbers = [1, 2, 3, 4];
console.log(move(numbers, 0, 2));
