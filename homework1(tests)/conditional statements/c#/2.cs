using System;

namespace Task2
{
    class Program
    {
        static void Main(string[] args)
        {
            //������� �2
            //���������� ����� �������� ����������� ����� � ������������ (�,�)
            int x = 1;
            int y = -1;

            if (x > 0 && y > 0)
            { 
                Console.WriteLine("�� ��������� � 1 ������������ ��������");
            }
            else if (x < 0 && y > 0)
            { 
                Console.WriteLine("�� ��������� � 2 ������������ ��������");
            }
            else if (x < 0 && y < 0)
            { 
                Console.WriteLine("�� ��������� � 3 ������������ ��������");
            }
            else if (x > 0 && y < 0)
            {
                Console.WriteLine("�� ��������� � 4 ������������ ��������");
            }
         
            else if (x == 0)
            {
                Console.WriteLine("����� ��������� �� ��� 'x'");
            }

            else if ( y == 0)
            {
                Console.WriteLine("����� ��������� �� ��� 'y'");
            }
       

        }
    }
}