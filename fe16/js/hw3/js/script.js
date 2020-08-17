class Employee {
    constructor({name, age, salary}) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }
}

class Programmer extends Employee {
    constructor({name, age, salary, lang = []}) {
        super({name, age, salary});
        this.lang = lang;
    }

    set lang(lang) {
        this._lang = lang;
    }

    get lang() {
        return this._lang;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get salary() {
        return this._salary * 3;
    }

    addLang(newLang) {
        this._lang = [...this._lang, newLang];
    }

    toString() {
        return `Name: ${this.name}, age: ${this.age}, salary: ${this.salary}, lang: ${this.lang}`;
    }
}

onReady = () => {
    const programmer1 = new Programmer({
        name: 'John Smith',
        age: 30,
        salary: 700,
        lang: ['html', 'css', 'js', 'php'],
    });

    const programmer2 = new Programmer({
        name: 'James Stone',
        age: 25,
        salary: 500,
        lang: ['php', 'java', 't-sql'],
    });

    console.log('' + programmer1);
    console.log('' + programmer2);
};

document.addEventListener('DOMContentLoaded', onReady);