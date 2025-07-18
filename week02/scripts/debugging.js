const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius;
areaOutput.innerHTML = area;

let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first} ${last}`;
}

const fullName = function (first, last) {
    return `${first} ${last}`;
}

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


