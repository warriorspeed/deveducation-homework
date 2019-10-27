using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            //������� �5
            // �������� ��������� ����������� ������ �������� �� ��� ��������, �� ������ ��������� ������
            //  �������     ������
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
                    Console.WriteLine($"������ �� ����� ���� {n} = F");
                    break;

                case int n when (n <= 30): 
                    Console.WriteLine($"������ �� ����� ���� {n} = �");
                    break;

                case int n when (n <= 59): 
                    Console.WriteLine($"������ �� ����� ���� {n} = D");
                    break;

                case int n when (n <= 74): 
                    Console.WriteLine($"������ �� ����� ���� {n} = C");
                    break;

                case int n when (n <= 89): 
                    Console.WriteLine($"������ �� ����� ���� {n} = B");
                    break;

                case int n when (n <= 100): 
                    Console.WriteLine($"������ �� ����� ���� {n} = A");
                    break;

                default: // 
                    Console.WriteLine("������� ����� �� 0 - 100");
                    break;
            }
        }
    }
}