// Create an object circle with radius property.
// Radius should be read and write
// Area property should be read-only and circle.area should return the area of the circle
// Area of circle formula = Pi * r * r;

const circle = {
    radius: 2,
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

circle.radius = 10;
console.log(circle.area);

// The below line has no effect.
circle.area = 100;
console.log(circle.area);
