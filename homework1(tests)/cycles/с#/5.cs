using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            // ������� �5
            //��������� ����� ���� �������� �����
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