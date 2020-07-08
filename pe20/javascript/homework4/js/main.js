const createNewUser = function () {
    const firstName = prompt('Enter first name: ');
    const lastName = prompt('Enter last name: ');

    const newUser = {
        firstName,
        lastName,
        getLogin() {
            return this.firstName.toLowerCase().charAt(0) + this.lastName.toLowerCase();
        },
        setFirstName(newFirstName) {
            Object.defineProperty(this, 'firstName', {
                value: newFirstName,
            });
        },
        setLastName(newLastName) {
            Object.defineProperty(this, 'lastName', {
                value: newLastName,
            });
        },
    };

    Object.defineProperties(newUser, {
        firstName: {
            writable: false,
        },
        lastName : {
            writable: false,
        },
    });

    return newUser;
};

const user = createNewUser();
user.firstName = 'BBBB';
console.log(user.getLogin());

user.setFirstName('Hanna');
user.setLastName('Sachok');
console.log(user.getLogin());
console.log(user);