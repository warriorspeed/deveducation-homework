using System;

namespace Task3
{
    class Program
    {
        static void Main(string[] args)
        {
            //Задание №3
            //Найти суммы только положительных из трех чисел

            int a = 3;
            int b = -2;
            int c = 4;
            int countSum = 0;
            if (a > 0)
            { 
                countSum += a;
            }
            if (b > 0)
            { 
                countSum += b;
            }
            if (c > 0)
            { 
                countSum += c;
            }
            Console.WriteLine(countSum); 
        }
    }
}