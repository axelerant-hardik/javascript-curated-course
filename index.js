// Check the numbers in the range of 0 to the limit passed are odd or even.
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        let numberStatus = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, numberStatus);
    }
}

console.log(showNumbers(10));
