//Если а - четное посчитать а*б, иначе а+б.
describe("function isEven() take arguments a and b if 'a' even - a * b , else a + b", function() {
    it("call function even with args a = 5, b = 10 and return 15", function () {
         const a = 5;
         const b = 10;
         const exp = 15;
         const act = even(a, b);
     assert.equal(act, exp); 
    });

    it("call function even with args a = 4, b = 6 and return 24", function () {
        const a = 4;
        const b = 6;
        const exp = 24;
        const act = even(a, b);
        assert.equal(act, exp); 
       });
    it("call function even with args a = 0, b = 6 and return 0", function () {
        const a = 0;
        const b = 6;
        const exp = 0;
        const act = even(a, b);
        assert.equal(act, exp); 
       });   
  
    it("call function even with args a = -4, b = 6 and return -24", function () {
        const a = -4;
        const b = 6;
        const exp = -24;
        const act = even(a, b);
        assert.equal(act, exp); 
       });

    it("call function even with args a = -5, b = 6 and return 1", function () {
        const a = -5;
        const b = 6;
        const exp = 1;
        const act = even(a, b);
        assert.equal(act, exp); 
       });  
         
    it("call function even with args a = 3.5, b = 6 and return 9.5", function () {
        const a = 3.5;
        const b = 6;
        const exp = 9.5;
        const act = even(a, b);
        assert.equal(act, exp); 
       });     
       
       
    it("call function even with args a = -10, b = -6 and return 60", function () {
        const a = -10;
        const b = -6;
        const exp = 60;
        const act = even(a, b);
        assert.equal(act, exp); 
       });  

    it("call function even with args a = -19, b = -6 and return -25", function () {
        const a = -19;
        const b = -6;
        const exp = -25;
        const act = even(a, b);
        assert.equal(act, exp); 
       });  
    it("call function isEven with args a = string '0' , b = 3 and return false", function () {
        const a = '0';
        const b = 3;
        const exp = false ;
        const act = even(a, b);

        assert.equal(act, exp);
    });

    it("call function isEven with args a = 0 , b = string '3' and return false", function () {
        const a = 0;
        const b = '3';
        const exp = false ;
        const act = even(a, b);

        assert.equal(act, exp);
    });
});


    //Задание №2
    //Определить какой четверти принадлежит точка с координатами (х у)

describe("function quarterDefinition() take arguments x and y and return quarters ", function() {
    it("call function quarterDefinition with args x = 4, y = 6 and return 1", function () {
        const a = 4;
        const b = 6
        const exp = 1;
        const act = quarterDefinition (a,b);
    
    assert.equal(act, exp);
    });

    it("call function quarterDefinition with args x = -4, y = 6 and return 2", function () {
        const a = -4;
        const b = 6;
        const exp = 2;
        const act = quarterDefinition (a,b);
        
        assert.equal(act, exp);
        });
    it("call function quarterDefinition with args x = -4, y = -6 and return 3", function () {
        const a = -4;
        const b = -6;
        const exp = 3;
        const act = quarterDefinition (a,b);
            
        assert.equal(act, exp);
        });
     it("call function quarterDefinition with args x = 4, y = -6 and return 4", function () {
        const a = 4;
        const b = -6;
        const exp = 4;
        const act = quarterDefinition (a,b);
                
        assert.equal(act, exp);
        });

     it("call function quarterDefinition with args x = 0, y = 2 and return 0", function () {
        const a = 0;
        const b = 2;
        const exp = 0;
        const act = quarterDefinition (a,b);
                    
        assert.equal(act, exp);
        });  
    it("call function quarterDefinition with args x = 3, y = 0 and return 0", function () {
        const a = 3;
        const b = 0;
        const exp = 0;
        const act = quarterDefinition (a,b);
                        
        assert.equal(act, exp);
        });
    it("call function quarterDefinition with args x = 0, y = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = quarterDefinition (a,b);
                            
        assert.equal(act, exp);
        });  
    it("call function quarterDefinition with args x = 1.23, y = 3.22 and return 0", function () {
        const a = 1.23;
        const b = 3.22;
        const exp = 1;
        const act = quarterDefinition (a,b);
                                
        assert.equal(act, exp);
        });
    it("call function quarterDefinition with args x = 0, y = -3.22 and return 0", function () {
        const a = 0;
        const b = -3.22;
        const exp = 0;
        const act = quarterDefinition (a,b);
                                    
        assert.equal(act, exp);
         });
    it("call function quarterDefinition with args x = string '3', y = 4 and return 0", function () {
        const a = '3';
        const b = 4;
        const exp = false;
        const act = quarterDefinition (a,b);
                                    
        assert.equal(act, exp);
        }); 
    it("call function quarterDefinition with args x = 'строка', y =  string 'slovo' and return 0", function () {
        const a ='строка';
        const b = 'slovo';
        const exp = false;
        const act = quarterDefinition (a,b);
                                        
        assert.equal(act, exp);
        });                           

    });  
     
     //Задание №3
     //Найти суммы только положительных из трех чисел  
     describe("function countPositiveAmounts()  take arguments a and b and c and return sum of positive args", function() {
    
    it("call function countPositiveAmounts with args a = 5, b = 7, c = 8 and return 20", function(){
        const a =5;
        const b = 7;
        const c = 8;
        const exp = 20;
        const act = countPositiveAmounts(a,b,c);

        assert.equal(act, exp);
        });
        it("call function countPositiveAmounts with args a = -5, b = 7, c = 8 and return 15", function(){
        const a =-5;
        const b = 7;
        const c = 8;
        const exp = 15;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
         }); 
       it("call function countPositiveAmounts with args a = -5, b = -7, c = 8 and return 8", function(){
        const a =-5;
        const b = -7;
        const c = 8;
        const exp = 8;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        });   
        it("call function countPositiveAmounts with args a = -5, b = -7, c = 8 and return 0", function(){
        const a =-5;
        const b = -7;
        const c = -8;
        const exp = 0;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        });    
        it("call function countPositiveAmounts with args a = 0, b = 0, c = 0 and return 0", function(){
        const a = 0;
        const b = 0;
        const c = 0;
        const exp = 0;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        }); 
        it("call function countPositiveAmounts with args a = 3.25, b = 2.75, c = 1.333 and return 0", function(){
        const a = 3.25;
        const b = 2.75;
        const c = 1.333;
        const exp = 7.333;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        });

        it("call function countPositiveAmounts with args a = 0, b = 2.75, c = 1.333 and return 0", function(){
        const a = 0;
        const b = 2.75;
        const c = 1.333;
        const exp = 4.083;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        }); 
         it("call function countPositiveAmounts with args a = 2 b = 0, c = 1.333 and return 0", function(){
        const a = 2;
        const b = 0;
        const c = 1.333;
        const exp = 3.333;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        }); 
         it("call function countPositiveAmounts with args a = 2 b = -72, c = 0 and return 2", function(){
        const a = 2;
        const b = -72;
        const c = 0;
        const exp = 2;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        });                            
        it("call function countPositiveAmounts with args a = 5, b = -2.75, c = 1.333 and return 6.333", function(){
        const a = 5;
        const b = -2.75;
        const c = 1.333;
        const exp = 6.333;
        const act = countPositiveAmounts(a,b,c);
    
        assert.equal(act, exp);
        });

        it("call function countPositiveAmounts with args a = 5, b = 2.75, c = -1.333 and return 7.75", function(){
        const a = 5;
        const b = 2.75;
        const c = -1.333;
        const exp = 7.75;
        const act = countPositiveAmounts(a,b,c);
        
        assert.equal(act, exp);
        });
       it("call function countPositiveAmounts with args a = string'5', b = 2, c = -5 and return false", function(){
        const a = '5';
        const b = 2;
        const c = -5;
        const exp = false;
        const act = countPositiveAmounts(a,b,c);
        
        assert.equal(act, exp);
        });                      
      it("call function countPositiveAmounts with args a = string'5', b = '2', c = -5 and return false", function(){
        const a = '5';
        const b = '2';
        const c = -5;
        const exp = false;
        const act = countPositiveAmounts(a,b,c);
        
        assert.equal(act, exp);
        }); 
       it("call function countPositiveAmounts with args a = string'5', b = 2, c = '-5' and return false", function(){
        const a = '5';
        const b = '2';
        const c = -'5';
        const exp = false;
        const act = countPositiveAmounts(a,b,c);
        
        assert.equal(act, exp);
        }); 
    });

    //Задание №4
    //Посчитать выражение макс(а*б*с, а+б+с)+3


describe("function whoIsMax() take arguments a and b and c and  return whoIsMax(a+b+c , a*b*c)+3 ", function() {
    it("call function whoIsMax with args a = 4, b = 6 , c = 3 and return 75", function () {
        const a = 4;
        const b = 6;
        const c = 3;
        const exp = 75;
        const act = whoIsMax(a,b,c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = 4, b = 3 , c = 0 and return 10", function () {
        const a = 4;
        const b = 3;
        const c = 0;
        const exp = 10;
        const act = whoIsMax(a,b,c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = 4, b = 0 , c = -2 and return 1", function () {
        const a = -4;
        const b = 0;
        const c = 2;
        const exp = 3;
        const act = whoIsMax(a,b,c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = 4, b = 0 , c = -4 and return 3", function () {
        const a = -4;
        const b = 0;
        const c = 4;
        const exp = 3;
        const act = whoIsMax(a,b,c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = 6 , c = 3 and return 8", function () {
        const a = -4;
        const b = 6;
        const c = 3;
        const exp = 8;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = -6 , c = 3 and return 75", function () {
        const a = -4;
        const b = -6;
        const c = 3;
        const exp = 75;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = -4, b = -6 , c = -3 and return 75", function () {
        const a = -4;
        const b = -6;
        const c = -3;
        const exp = -10;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
    it("call function whoIsMax with args a = '-4', b = -6 , c = 3 and return false", function () {
        const a = '-4';
        const b = -6;
        const c = -3;
        const exp = false;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });

    it("call function whoIsMax with args a = '-4', b = '-6' , c = '-3' and return false", function () {
        const a = '-4';
        const b = '-6';
        const c = '-3';
        const exp = false;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });

    it("call function whoIsMax with args a = 2.5, b = 6.3 , c = 5.7 and return 92,775", function () {
        const a = 2.5   ;
        const b = 6.3;
        const c = 5.7;
        const exp = 92.775;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });

    it("call function whoIsMax with args a = 2, b = 0.9 , c = 0.7 and return 6.6", function () {
        const a = 2   ;
        const b = 0.9;
        const c = 0.7;
        const exp = 6.6;
        const act = whoIsMax(a, b, c);

        assert.equal(act, exp);
    });
});

//Задание №5
//Написать программу определения оценки студента по его рейтингу на основе следующих правил

describe("function eval() a -  0-19=F, 20-39=E , 40-59=D , 60-74=C , 75-89=B , 90-100 = A", function() {
    it("call function eval with args a = 0, and return F", function () {
        const a = 0;
        const exp = 'F';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 5, and return F", function () {
        const a = 5;
        const exp = 'F';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 5.5, and return F", function () {
        const a = 5.5;
        const exp = 'F'
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 19.5, and return F", function () {
        const a = 19.5;
        const exp = 'F';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 20, and return E", function () {
        const a = 20;
        const exp = 'E';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 59, and return D", function () {
        const a = 59;
        const exp = 'D';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 60, and return C", function () {
        const a = 60;
        const exp = 'C';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 75, and return B", function () {
        const a = 75;
        const exp = 'B';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
 
    it("call function eval with args a = 90, and return C", function () {
        const a = 90;
        const exp = 'A';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 100, and return A", function () {
        const a = 100;
        const exp = 'A';
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = '100', and return false", function () {
        const a = '100';
        const exp = false;
        const act = eval(a);
        
        assert.equal(act , exp);
    });
    it("call function eval with args a = 15, and return 'Введено отрицательное' ", function () {
        const a = -15;
        const exp = "Введено отрицательное";
        const act = eval(a);
        
        assert.equal(act , exp);
    });
});