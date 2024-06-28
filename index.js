// Divisible by 3 => return Fizz
// Divisible by 5 => return Buzz
// Divisible by both 3 and 5 => return FizzBuzz
// Not divisible by both 3 and 5 => return number passed
// Any value passed to the function which is not a number should return 'Not a Number' string.

function fizzBuzz(number) {
    // Bail out if not a number.
    if (typeof number !== 'number') {
        return 'Not a Number';
    }

    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 5 === 0) {
        return 'Buzz';
    }
    else if (number % 3 === 0) {
        return 'Fizz';
    }
    else {
        return number;
    }
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(8));
console.log(fizzBuzz('8'));
console.log(fizzBuzz(true));
console.log(fizzBuzz(['red', 'blue']));
