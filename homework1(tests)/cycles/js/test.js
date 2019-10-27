//Задание №1
//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

describe("function evenSum() take arguments a and return Arra ['сумма четных чисел' , 'количество четных чисел']", function() {
    it("call function evenSum() with args a = 99   return  ['2450','49']", function () {
        const a = 99;
        const exp = '2450 - 49';
        const act = evenSum(a);

        assert.equal(act, exp);
    });
    it("call function evenSum() with args a = 99   return  ['2450','49']", function () {
        const a = '99';
        const exp = false;
        const act = evenSum(a);

        assert.equal(act, exp);
    });
});

//Задание №2
//найти простое ли число 
describe("function simpleNumber() take arguments  take args a , and return 'Составное число' или 'Простое число'",function() {
    it("call function simpleNumber() with args a = 11 return Простое число", function () {
        const a = 11;
        const exp = 'Простое число';
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
    it("call function simpleNumber() with args a = 6 return Простое число", function () {
        const a = 6;
        const exp = "Составное число";
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
    it("call function simpleNumber() with args a = -44 return Простое число", function () {
        const a = -44;
        const exp = "Составное число";
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
    it("call function simpleNumber() with args a = 2 return Простое число", function () {
        const a = 2;
        const exp = 'Простое число';
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
    it("call function simpleNumber() with args a = 17 return Простое число", function () {
        const a = 17;
        const exp = 'Простое число';
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
    it("call function simpleNumber() with args a = string '17' return Простое число", function () {
        const a = "17";
        const exp = "Вы вводите строку, а не число";
        const act = simpleNumber(a);

        assert.equal(act, exp);
    });
});

//Задание №3
// Найти корень натурального числа с точностью до целого
describe("function naturalNumberRoot , take args a , and return корень натурального числа", function() {
    it("call function naturalNumberRoot() with args a = 11 return 3 ", function () {
     const a = 11;
     const exp = 3;
     const act = naturalNumberRoot(a);

    assert.equal(act, exp);
    });    
    it("call function naturalNumberRoot() with args a = 110 return 10 ", function () {
        const a = 110;
        const exp = 10;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = 33 return 5 ", function () {
        const a = 33;
        const exp = 5;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = 99 return 9 ", function () {
        const a = 99;
        const exp = 9;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = 145 return 12 ", function () {
        const a = 145;
        const exp = 12;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = string '145' return 'Вы вводите строку, а не число' ", function () {
        const a = "145";
        const exp = "Вы вводите строку, а не число";
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = 9.3 return 3 ", function () {
        const a = 9.3;
        const exp = 3;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = 0 return 0 ", function () {
        const a = 0;
        const exp = 0;
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
    });
    it("call function naturalNumberRoot() with args a = -9 return 'Введите положительное число' ", function () {
        const a = -9;
        const exp = "Введите положительное число";
        const act = naturalNumberRoot(a);

        assert.equal(act, exp);
        });
});
 // Задание №4
//Вычислить факториал числа
describe("function factorial , take args a , and return factorialN", function() {
    it("call function factorial() with args a = 3 return 6 ", function () {
        const a = 3;
        const exp = 6;
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorial() with args a = 0 return 1 ", function () {
        const a = 0;
        const exp = 1;
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorial() with args a = -3 return 'Undefine' ", function () {
        const a = -3;
        const exp = "Undefine";
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorial() with args a = 9 return 362880 ", function () {
        const a = 9;
        const exp = 362880;
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorial() with args a = string '9' return ''Вы вводите строку, а не число'' ", function () {
        const a = '9';
        const exp = "Вы вводите строку, а не число";
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args a = 17 return 355687428096000 ", function () {
        const a = 17;
        const exp = 355687428096000;
        const act = factorial(a);

        assert.equal(act, exp);
    });
    it("call function factorialN() with args a = 25 return 15511210043330985984000000 ", function () {
        const a = 25;
        const exp = 15511210043330985984000000;
        const act = factorial(a);

        assert.equal(act, exp);
    });
});

// Задание №5
//Посчитать сумму цифр заданого числа
describe("function sumThisNum , take args a , and return sumThisNum", function() {
    it("call function sumThisNum() with args x = 25 return 7 ", function () {
    const a = 25;
    const exp = 7;
    const act = sumThisNum(a);

    assert.equal(act, exp);

    });
    it("call function sumThisNum() with args a = 25 return 7 ", function () {
        const a = 25;
        const exp = 7;
        const act = sumThisNum(a);
    
        assert.equal(act, exp);
    
    });
    it("call function sumThisNum() with args a = 25915 return 22 ", function () {
        const a = 25915;
        const exp = 22;
        const act = sumThisNum(a);
    
        assert.equal(act, exp);
    
    });
    it("call function sumThisNum() with args a = 'slovo' return 'Вы вводите строку, а не число' ", function () {
        const a = "slovo";
        const exp = "Вы вводите строку, а не число";
        const act = sumThisNum(a);
    
        assert.equal(act, exp);
    
    });
    it("call function sumThisNum() with args a = -444 return  0 ", function () {
        const a = -444;
        const exp = 0;
        const act = sumThisNum(a);
    
        assert.equal(act, exp);
    
    });
    it("call function sumThisNum() with args a = 0 return  0 ", function () {
        const a = 0;
        const exp = 0;
        const act = sumThisNum(a);
    
        assert.equal(act, exp);
    
    });
});
// Задание № 6
// Вывести число, которое является зеркальным отображением последовательности цифр заданого числа, например задано число 123, вывести 321

describe("function mirroredNumber , take args a , and return sumThisNum", function() {
    it("call function mirrorNumber() with args a = 123 return 321 ", function () {  
      const a = 123;   
      const exp = 321;
      const act = mirroredNumber(a);

      assert.equal(act, exp);
    });

    it("call function sumThisNum() with args a = 'slovo' return 'Вы вводите строку, а не число' ", function () {
        const a = "slovo";
        const exp = "Вы вводите строку, а не число";
        const act = mirroredNumber(a);
    
        assert.equal(act, exp);
    
    });


});