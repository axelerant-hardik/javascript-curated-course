// Sum all the multiples of 3 and 5 starting from 0 till the limit passed.
function sum(limit) {
    let total = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            total += i;
        }
    }
    return total;
}

console.log(sum(14));
console.log(sum(10));
