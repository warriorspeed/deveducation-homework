using System;

namespace Task2
{
    //������� �2
    //����� ������� �� ����� 
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
                Console.WriteLine("������� �����");
            }
            else
            {
                Console.WriteLine("��������� �����");
            }
        }
    }
}