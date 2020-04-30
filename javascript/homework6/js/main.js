const filterBy = function(array, dataType) {
    return array.filter(elem => dataType === 'null' ? elem !== null : typeof elem !== dataType);
};

const data = ['hello', 'world', 23, '23', null];
console.log(filterBy(data, 'string'));