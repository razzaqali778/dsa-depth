namespace TwoPointersSolutions;

public static class IsPalindrome
{
    public static bool Check(string s)
    {
        var i = 0;
        var j = s.Length - 1;
        while (i < j)
        {
            if (s[i] != s[j])
            {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
