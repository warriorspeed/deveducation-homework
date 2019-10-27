// Найти индекс максимального элемента массива

function maxElArray(array) {
    if (typeof array != 'object') {
        return false;
    }
    if (arguments.length > 1) {
        return false;
    }
    let max = array[0];
    for (i = 0; i < array.length; ++i)
        if (array[i] > max) max = array[i];

    return array.indexOf(max);
}


