// Calculate the grade of a student.
// Pass in an array of marks, calculate its average.
// Average 1-59: F
// Average 60-69: D
// Average 70-79: C
// Average 80-89: B
// Average 90-100: A
function calculateAverage(marks) {
    let totalMarks = 0;
    for (let mark of marks) {
        totalMarks += mark;
    }
    return totalMarks / marks.length;
}

function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if (average < 60) {
        return 'F';
    }
    else if (average >= 60 && average < 70) {
        return 'D';
    }
    else if (average >= 70 && average < 80) {
        return 'C';
    }
    else if (average >= 80 && average < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}

console.log(calculateGrade([80, 70, 95, 60, 65]));
console.log(calculateGrade([40, 50, 55, 42]));
console.log(calculateGrade([100, 90, 80, 75, 85, 70]));
