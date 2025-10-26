namespace TwoPointersSolutions;

public static class IsSubsequence
{
    public static bool Check(string target, string source)
    {
        var i = 0;
        var j = 0;
        while (i < target.Length && j < source.Length)
        {
            if (target[i] == source[j])
            {
                i++;
            }
            j++;
        }

        return i == target.Length;
    }
}
