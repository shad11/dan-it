const student = {
    name: null,
    'last name': null,
};

const isAccepted = function (student) {
    if (student.table === undefined) {
        return false;
    }

    for (let key in student.table) {
        if (student.table[key] < 4) {
            return false;
        }
    }

    return true;
};

const calcAverageMark = function (student) {
    let sum = 0;

    if (student.table === undefined) {
        return 0;
    }

    for (let key in student.table) {
        sum += student.table[key];
    }

    return sum / Object.keys(student.table).length;
};

const studentName = prompt('Enter student\'s first name: ');
const studentSurname = prompt('Enter student\'s last name: ');

student.studentName = studentName;
student['last name'] = studentSurname;

let subject;
let mark;
let studentTable = {};

while (true) {
    subject = prompt('Enter a subject: ');
    if (subject === null) {
        break;
    }

    mark = parseFloat(prompt(`Enter student's mark for ${subject}: `));

    studentTable[subject] = mark;
}

if (Object.keys(studentTable).length) {
    student.table = studentTable;
}

if (isAccepted(student)) {
    console.log('Студент переведен на следующий курс');
}

if (calcAverageMark(student) > 7) {
    console.log('Студенту назначена стипендия');
}

