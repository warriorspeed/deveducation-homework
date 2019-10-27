using System;

namespace Task1
{
    class Program
    {
        static void Main(string[] args)
        {  
		   // Задание №1
           // Если а - четное посчитать a * b , иначе a + b
            int a = 5;
            int b = 4;
            int count = 0;
            if( a % 2 == 0){
                count = a * b;

            }else{
                count = a + b;
            }
            Console.WriteLine(count);

        }
    }
}