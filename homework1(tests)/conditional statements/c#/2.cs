using System;

namespace Task2
{
    class Program
    {
        static void Main(string[] args)
        {
            //Задание №2
            //Определить какой четверти принадлежит точка с координатами (х,у)
            int x = 1;
            int y = -1;

            if (x > 0 && y > 0)
            { 
                Console.WriteLine("мы находимся в 1 координатной четверти");
            }
            else if (x < 0 && y > 0)
            { 
                Console.WriteLine("мы находимся в 2 координатной четверти");
            }
            else if (x < 0 && y < 0)
            { 
                Console.WriteLine("мы находимся в 3 координатной четверти");
            }
            else if (x > 0 && y < 0)
            {
                Console.WriteLine("мы находимся в 4 координатной четверти");
            }
         
            else if (x == 0)
            {
                Console.WriteLine("Точка находится на оси 'x'");
            }

            else if ( y == 0)
            {
                Console.WriteLine("Точка находится на оси 'y'");
            }
       

        }
    }
}