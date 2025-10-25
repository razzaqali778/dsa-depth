namespace RecursionSolutions;

public static class ReverseString
{
    public static string Solve(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return string.Empty;
        }

        return Solve(input[1..]) + input[0];
    }
}
