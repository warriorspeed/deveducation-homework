//Если а - четное посчитать а*б, иначе а+б.
 even = (a,b) =>{
    if(typeof a === 'string' || typeof b === 'string')
    {
        return false;
    }
    if(a === 0 ){
        return 0;
    }
    if (a%2==0){
      return  (a*b);
    }
    else return (a+b);
}
//Задание №2
//Определить какой четверти принадлежит точка с координатами (х у)

 quarterDefinition = (a,b) =>{
     if (typeof a === 'string' || typeof b === 'string'){ return false}
     else if( a>0 && b>0 )       {return 1;}
     else if( a<0 && b>0)   {return 2;}
     else if ( a<0 && b<0 ) {return 3;}
     else if (a>0 && b<0)   {return 4;}
     else if(a==0 || b==0)  {return 0;}
    
}

//Задание №3
//Найти суммы только положительных из трех чисел

countPositiveAmounts =(a, b, c)=>{
    let countSum = 0;
    if (typeof a === 'string' ||typeof b === 'string'||typeof c === 'string'){return false;}
    if(a > 0){countSum += a;}
    if (b > 0){  countSum += b;}
    if (c > 0){countSum += c;}
    return countSum;
}

//Задание №4
//Посчитать выражение макс(а*б*с, а+б+с)+3

whoIsMax = (a,b,c) =>{
    let max = 0;
    if (typeof a === 'string' ||typeof b === 'string'||typeof c === 'string'){return false;}
    if (a*b*c+3 > a+b+c+3){return max =a*b*c+3;} 
    else return max = a+b+c+3;
} 

//Задание №5
//Написать программу определения оценки студента по его рейтингу на основе следующих правил
eval =(a) =>{
    if(typeof a === 'string'){ return false;}
    if(a<0){return "Введено отрицательное"}
    
    switch(true){
        case (a<20): return 'F'; 
        break;
    }
    switch(true){
        case (a<40): return 'E';
        break;
    }
    switch(true){
        case (a<60): return 'D';
        break;
    }
    switch(true){
        case (a<75): return 'C';
        break;
    }
    switch(true){
        case (a<90): return 'B';
        break;
    }
    switch(true){
        case (a<101): return 'A';
        break;
    }
}

