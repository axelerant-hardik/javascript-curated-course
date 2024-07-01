const address = {
    street: 'MG Road',
    city: 'Pune',
    zipcode: 411001,
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}

showAddress(address);
