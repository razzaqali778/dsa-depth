using System.Collections.Generic;

namespace HashingSolutions;

public static class Anagrams
{
    public static bool Solve(string s1, string s2)
    {
        if (s1.Length != s2.Length)
        {
            return false;
        }

        var counts = new Dictionary<char, int>();
        foreach (char c in s1)
        {
            counts.TryGetValue(c, out int value);
            counts[c] = value + 1;
        }

        foreach (char c in s2)
        {
            if (!counts.TryGetValue(c, out int value) || value == 0)
            {
                return false;
            }
            counts[c] = value - 1;
        }

        return true;
    }
}
