using System;

namespace Task2
{
    //Задание №2
    //найти простое ли число 
    class Program
    {
        static void Main(string[] args)
        {
            int num = 15;
            bool isPrime = true;
            for (int i = 2; i < num / 2; i++)
            {
                if (num % i == 0)
                {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime)
            {
                Console.WriteLine("Простое число");
            }
            else
            {
                Console.WriteLine("Составное число");
            }
        }
    }
}