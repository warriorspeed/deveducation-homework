using System;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            // ������� �4
            // ��������� ��������� ���� (�*�*�, �+�+�) +3

            int a = 1;
            int b = 1;
            int c = 3;
            int max = 0;
            if (a * b * c + 3 > a + b + c + 3)
            { 
                max = a * b * c + 3;
            }
            else
            {
                max = a + b + c + 3;
            }
            Console.WriteLine(max); 

        }
    }
}