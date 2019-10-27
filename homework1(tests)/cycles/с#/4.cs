using System;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            // Задание №4
            //Вычислить факториал числа

            int result = 1;
            int n = 6;
            for (int i = 1; i <= n; i++)
            {
                result *= i;
            }
            Console.WriteLine(result);


        }
    }
}