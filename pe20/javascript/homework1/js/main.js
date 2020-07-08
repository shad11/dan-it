let name = prompt('Enter your name: ');
let age = +prompt('Enter tour age: ') || '';

while (!isNaN(name)) {
    name = prompt('Your name is uncorrected! Enter correct name:', name);
}

while (!age) {
    age = +prompt('Uncorrected age. Please enter again: ', age);
}

if (age < 18) {
    alert('You are not allowed to visit this website!');
} else if (age <= 22) {
    confirm('Are you sure you want to continue?')
        ? alert(`Welcome, ${name}`)
        : alert('You are not allowed to visit this website');
} else {
    alert(`Welcome, ${name}`);
}