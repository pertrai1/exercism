using System;
using System.Text;
public static class Raindrops
{
    public static string Convert(int number)
    {
        StringBuilder output = new StringBuilder("");

        if (number % 3 == 0)
        {
            output.Append("Pling");
        }
        if (number % 5 == 0)
        {
            output.Append("Plang");
        }
        if (number % 7 == 0)
        {
            output.Append("Plong");
        }
        if (number % 3 != 0 && number % 5 != 0 && number % 7 != 0)
        {
            output.Append(number.ToString());
        }

        return output.ToString();
    }
}