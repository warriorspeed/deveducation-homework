using System;

namespace Task1
{
    //Задание №1
    //Найти сумму четных чисел и их количество в диапазоне от 1 до 99
    class Program
    {
        static void Main(string[] args)
        {
            int countSum = 0;
            int quantityNum = 0;
            for (int i = 1; i <= 99; i++)
            {
                if (i % 2 == 0)
                {
                    countSum += i;  
                    quantityNum++; 
                }
            }
            Console.WriteLine(countSum);
            Console.WriteLine(quantityNum);
        }
    }
}