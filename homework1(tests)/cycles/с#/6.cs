using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            // ������� � 6
            // ������� �����, ������� �������� ���������� ������������ ������������������ ���� �������� �����, �������� ������ ����� 123, ������� 321

            int myNum = 321;
            string inline = String.Empty;
            int result;
            while (myNum != 0)
            {
                result = myNum % 10;
                myNum /= 10;
                inline += result;
            }
            Console.WriteLine(inline);
        }
    }
}