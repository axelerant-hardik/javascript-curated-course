// Get all prime numbers between 0 and limit passed.
function showPrimeNumbers(limit) {
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false
                break;
            }
        }

        // Print if number is prime.
        if (isPrime) {
            console.log(number);
        }
    }
}

showPrimeNumbers(20);
