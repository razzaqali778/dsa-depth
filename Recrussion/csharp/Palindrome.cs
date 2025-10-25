
namespace RecursionSolutions;

public static class Palindrome
{
    public static bool Solve(string input)
    {
        return IsPalindrome(input, 0, input.Length - 1);
    }

    private static bool IsPalindrome(string input, int left, int right)
    {
        if (left >= right)
        {
            return true;
        }

        if (input[left] != input[right])
        {
            return false;
        }

        return IsPalindrome(input, left + 1, right - 1);
    }
}
