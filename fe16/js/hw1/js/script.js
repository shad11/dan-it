const ready = () => {
    /** task1 **/
    const cities = ["Kyiv", "Berlin", "Dubai", "Moscow", "Paris"];
    //console.log(...cities);
    const [kyiv, berlin, dubai, moscow, paris] = cities;
    console.log(kyiv, berlin, dubai, moscow, paris);

    /** task2 **/
    const employee = {
        name: 'John',
        salary: 1000,
        department: 'IT',
    };
    const {name, salary} = employee;
    console.log(name, salary);

    /** task3 **/
    const [value, showValue] = ['value', 'showValue'];
    alert(value); // будет выведено 'value'
    alert(showValue);  // будет выведено 'showValue'
};

document.addEventListener('DOMContentLoaded', ready);