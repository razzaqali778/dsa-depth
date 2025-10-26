using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class OverlapSubsequence
{
    public static int Length(string str1, string str2)
    {
        var memo = new Dictionary<(int, int), int>();
        return Dfs(0, 0, str1, str2, memo);
    }

    private static int Dfs(int i, int j, string str1, string str2, IDictionary<(int, int), int> memo)
    {
        if (i == str1.Length || j == str2.Length)
        {
            return 0;
        }

        var key = (i, j);
        if (memo.TryGetValue(key, out var cached))
        {
            return cached;
        }

        if (str1[i] == str2[j])
        {
            memo[key] = 1 + Dfs(i + 1, j + 1, str1, str2, memo);
        }
        else
        {
            var left = Dfs(i + 1, j, str1, str2, memo);
            var right = Dfs(i, j + 1, str1, str2, memo);
            memo[key] = left > right ? left : right;
        }

        return memo[key];
    }
}
