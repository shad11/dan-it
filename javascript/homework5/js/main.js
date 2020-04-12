const isString = function(str) {
    return isNaN(str);
};

const isValidDateStr = function(str) {
    const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    return reg.test(str);
};

const getDateFromStr = function(str) {
    const newStr = str.split('.').reverse().join('-');
    return new Date(newStr);
};

const createNewUser = function() {
    const firstName = prompt('Enter first name: ');
    const lastName = prompt('Enter last name: ');

    let birthDateStr;
    do {
        birthDateStr = prompt('Enter your date of birth (dd.mm.yyyy): ');
    } while (!isValidDateStr(birthDateStr));


    const newUser = {
        firstName,
        lastName,
        birthDate: getDateFromStr(birthDateStr),
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
        getAge() {
            return (new Date()).getFullYear() - this.birthDate.getFullYear();
        },
        getPassword() {
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthDate.getFullYear();
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
console.log(user);
console.log(user.getAge());
console.log(user.getPassword());