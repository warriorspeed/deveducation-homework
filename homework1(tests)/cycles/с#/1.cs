using System;

namespace Task1
{
    //������� �1
    //����� ����� ������ ����� � �� ���������� � ��������� �� 1 �� 99
    class Program
    {
        static void Main(string[] args)
        {
            int countSum = 0;
            int quantityNum = 0;
            for (int i = 1; i <= 99; i++)
            {
                if (i % 2 == 0)
                {
                    countSum += i;  
                    quantityNum++; 
                }
            }
            Console.WriteLine(countSum);
            Console.WriteLine(quantityNum);
        }
    }
}