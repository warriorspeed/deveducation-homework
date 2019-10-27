 evenSum =(a)=>{
    let countSum = 0;
    let quantityNum = 0;
    if(typeof a === 'string'){
        return false;
    }
    for(i = 1; i <= a; i++){
        if ( i % 2 === 0 ){
            countSum += i;  // считаем сумму четных чисел
            quantityNum ++; // считаем количество четных
        }
    }
    let array=`${countSum} - ${quantityNum}`;
    return array;
}
//Задание №2
//найти простое ли число 
simpleNumber = (a) =>{
    
    composite = false;
    if (typeof a === 'string') {return "Вы вводите строку, а не число"}
    if ((a % 2 == 0) && (a != 2)) { return "Составное число";}
    else if (a == 2) { return "Простое число";} 
    else {for (i = 2; i < a; i++) {
    if (a % i == 0) {
    composite = true;
    return "Составное число";
    break;}
    else if (composite == false) {
    return "Простое число";
    break;
            }
        }
    }
}   

//Задание №3
// Найти корень натурального числа с точностью до целого
naturalNumberRoot = (a) =>{
    let result;
    if (typeof a === 'string') {return "Вы вводите строку, а не число"}
    else if (a == 0 || a == 1) {return a;}
    else if (a < 0) {return "Введите положительное число"}
    for (let i = 1; a > i; i++) { result = i * i;
    if (result > a) {i--; return i;}
    else if (result == a) {return i;
        }
    }
}

// Задание №4
//Вычислить факториал числа
factorial = (a) =>{
let result = 1 ;
if ( a < 0){return "Undefine"}
if (typeof a === 'string') {return "Вы вводите строку, а не число"}
for(i = 1; i<=a; i++){
    result *= i;

}   
return result;
}
// Задание №5
//Посчитать сумму цифр заданого числа

sumThisNum = (a) =>{
    if (typeof a === 'string') {return "Вы вводите строку, а не число"}
    let sum = 0;
    while (a>0) {
        sum += a % 10;
        a = Math.floor( a / 10);
    }
    return sum;
}

// Задание № 6
// Вывести число, которое является зеркальным отображением последовательности цифр заданого числа, например задано число 123, вывести 321

 mirroredNumber = (a) =>{
if(typeof a === 'string') {return 'Вы вводите строку, а не число'; }
let inline = '';
let result;
while (a>0) {
result = a % 10;
a = Math.floor(a / 10);
inline += result + '';
}
return inline;
}


