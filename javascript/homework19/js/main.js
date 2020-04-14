const checkReadyTasks = function(employeesArr, tasksArr, dateEnd) {
    let leftDays = 0;
    let sumWorkPoints = 0;
    let currDate;
    const taskPoints = tasksArr.reduce((first, second) => first + second);
    const teamPoints = employeesArr.reduce((first, second) => first + second);

    for (currDate = new Date(); currDate.getTime() < dateEnd.getTime(); currDate.setDate(currDate.getDate() + 1)) {
        if ([0, 6].indexOf(currDate.getDay()) > -1) {
            continue;
        }

        if (sumWorkPoints < taskPoints) {
            sumWorkPoints += teamPoints;
        } else {
            leftDays++;
        }
    }

    if (leftDays > 0) {
        return `Все задачи будут успешно выполнены за ${leftDays} дней до наступления дедлайна!`;
    } else if (leftDays === 0 && sumWorkPoints === taskPoints) {
        return `Все задачи будут успешно выполнены в день наступления дедлайна!`;
    } else {
        const leftHours = Math.ceil((taskPoints - sumWorkPoints)/teamPoints * 8);
        return `Команде разработчиков придется потратить дополнительно ${leftHours} часов после дедлайна, чтобы выполнить все задачи в беклоге`;
    }

};

const employees = [10, 4, 5, 3, 7];
const tasks = [30, 10, 20, 15, 60, 40, 28];
const deadline = new Date('2020-04-27');

console.log(checkReadyTasks(employees, tasks, deadline));