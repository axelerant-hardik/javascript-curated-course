// Returns true if the image is landscape
// i.e. width is greater than height.
function isLandscape(width, height) {
    return width > height;
}

console.log(isLandscape(400, 600));
console.log(isLandscape(300, 150));
console.log(isLandscape(100, 100));
