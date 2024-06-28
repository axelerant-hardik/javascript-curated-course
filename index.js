// Speed limit = 70.
// Anything below speed limit, show `OK`.
// For every 5 above speed limit, add 1 point and display that.
// More than 12 points - show `License Suspended`.

function checkSpeed(speed) {
    const SPEED_LIMIT = 70;
    const POINT_LIMITER = 5;

    // Calculate the points.
    let overSpeedDifference = (speed - SPEED_LIMIT);
    let points = overSpeedDifference > 0 ? Math.floor(overSpeedDifference / POINT_LIMITER) : 0;

    if (points === 0) {
        return 'OK';
    }
    else if (points > 12) {
        return 'License Suspended';
    }
    else {
        return 'Points: ' + points;
    }
}

console.log(checkSpeed(40));
console.log(checkSpeed(70));
console.log(checkSpeed(74));
console.log(checkSpeed(76));
console.log(checkSpeed(90));
console.log(checkSpeed(120));
console.log(checkSpeed(150));
