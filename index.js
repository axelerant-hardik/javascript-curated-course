// Create objects using factory functions as well as constructor.

// Factory function.
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode,
    };
}

// Constructor.
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Creating object via factory function.
const address1 = createAddress('SB Road', 'Pune', 411010);
console.log(address1);

// Creating object via constructor.
const address2 = new Address('SV Road', 'Mumbai', 400059);
console.log(address2);
