using System;
using System.Text;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        StringBuilder output = new StringBuilder(input);

        for (int i = 0; i < input.Length / 2; i++)
        {
            char temp = input[i];
            output[i] = input[input.Length - i - 1];
            output[input.Length - i - 1] = temp;
        }
        return output.ToString();
    }
}