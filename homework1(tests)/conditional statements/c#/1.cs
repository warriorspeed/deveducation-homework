using System;

namespace Task1
{
    class Program
    {
        static void Main(string[] args)
        {  
		   // ������� �1
           // ���� � - ������ ��������� a * b , ����� a + b
            int a = 5;
            int b = 4;
            int count = 0;
            if( a % 2 == 0){
                count = a * b;

            }else{
                count = a + b;
            }
            Console.WriteLine(count);

        }
    }
}