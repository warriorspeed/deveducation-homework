//Задание 7:Посчитать количество нечентных элементов массива
var masive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function quantityСalculation(array ) {
    if ( typeof(masive) !== 'object' ){
        return false
    }
    if(arguments.length > 1 || arguments.length == 0){
        return false
    }
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] %2 !=0){
            count++;
        }
    }
    return  count;
}










// var masiveOdd = 0;
// for (i = 0; i < masive.length; i++) {
//     if (masive[i] % 2 != 0) {
//         masiveOdd += 1;
//     }
// }
// return masiveOdd