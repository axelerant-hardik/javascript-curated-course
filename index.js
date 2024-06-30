// Print all the properties of an object that are of type string.
function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

const personObject = {
    firstname: 'Hardik',
    lastName: 'Pandya',
    age: 31,
    isAdmin: true,
    country: 'India',
};

console.log(showProperties(personObject));
