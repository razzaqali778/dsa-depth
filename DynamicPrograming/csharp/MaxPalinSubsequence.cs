using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class MaxPalinSubsequence
{
    public static int Longest(string s)
    {
        if (string.IsNullOrEmpty(s))
        {
            return 0;
        }

        var memo = new Dictionary<(int, int), int>();
        return Dfs(0, s.Length - 1, s, memo);
    }

    private static int Dfs(int i, int j, string s, IDictionary<(int, int), int> memo)
    {
        if (i == j)
        {
            return 1;
        }

        if (i > j)
        {
            return 0;
        }

        var key = (i, j);
        if (memo.TryGetValue(key, out var cached))
        {
            return cached;
        }

        if (s[i] == s[j])
        {
            memo[key] = 2 + Dfs(i + 1, j - 1, s, memo);
        }
        else
        {
            var left = Dfs(i + 1, j, s, memo);
            var right = Dfs(i, j - 1, s, memo);
            memo[key] = left > right ? left : right;
        }

        return memo[key];
    }
}
