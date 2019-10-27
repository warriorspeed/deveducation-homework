// Найти минимальный элемент массива
//[1 , 22 , 7 , 4 , 74 , 88 , -2  , 121 ]
function minElArray(array){
    if(arguments.length > 1){
        return false;
    }
    if (typeof array != 'object'){
        return false;
    }
    let min = array[0];
    for(let i = 1; i < array.length; ++i){
        if (min > array[i]) min = array[i];
    }
    return min;
}
