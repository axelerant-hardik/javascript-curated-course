// The exercise involves creating two objects using a constructor and
// 1. Check if all their properties have the same values
// 2. Check if they are same i.e pointing to same reference

// Constructor.
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Check if properties are same.
function areEqual(address1, address2) {
    let equal = true;
    for (let key of Object.keys(address1)) {
        if (address1[key] !== address2[key]) {
            equal = false;
            break;
        }
    }
    return equal;
}

// Check if objects point to same reference.
function areSame(address1, address2) {
    return address1 === address2;
}

// Creating object.
const address1 = new Address('SB Road', 'Pune', 411010);
const address2 = new Address('SB Road', 'Pune', 411010);
const address3 = new Address('FC Road', 'Pune', 411011);
const address4 = address3;

console.log(areEqual(address1, address2));
console.log(areEqual(address1, address3));
console.log(areSame(address1, address2));
console.log(areSame(address3, address4));
