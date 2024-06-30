// Show rows of stars, with rows set based on limit passed.
function showStars(limit) {
    for (let i = 1; i <= limit; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStars(5);
