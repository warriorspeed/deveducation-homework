using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            //Задание №5
            // Написать программу определения оценки студента по его рейтингу, на основе следующих правил
            //  Рейтинг     Оценка
            //  0-19           F
            //  20-39          E
            //  40-59          D
            //  60-74          C
            //  75-89          B
            //  90-100         A

            int rating = 95;

            switch (rating)
            {
                case int n when (n <= 19): 
                    Console.WriteLine($"Оценка по этому балу {n} = F");
                    break;

                case int n when (n <= 30): 
                    Console.WriteLine($"Оценка по этому балу {n} = Е");
                    break;

                case int n when (n <= 59): 
                    Console.WriteLine($"Оценка по этому балу {n} = D");
                    break;

                case int n when (n <= 74): 
                    Console.WriteLine($"Оценка по этому балу {n} = C");
                    break;

                case int n when (n <= 89): 
                    Console.WriteLine($"Оценка по этому балу {n} = B");
                    break;

                case int n when (n <= 100): 
                    Console.WriteLine($"Оценка по этому балу {n} = A");
                    break;

                default: // 
                    Console.WriteLine("Введите число от 0 - 100");
                    break;
            }
        }
    }
}