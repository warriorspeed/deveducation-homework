using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            // Задание №5
            //Посчитать сумму цифр заданого числа
            int myNumber = 3145;
            int sum = 0;
            while (myNumber != 0)
            {
                sum += myNumber % 10;
                myNumber /= 10;
            }
            Console.WriteLine(sum);
        }
    }
}