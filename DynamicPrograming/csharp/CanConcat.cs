using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class CanConcat
{
    public static bool CanConcatenate(string s, IReadOnlyList<string> words)
    {
        var memo = new Dictionary<int, bool>();
        return Dfs(0, s, words, memo);
    }

    private static bool Dfs(int index, string s, IReadOnlyList<string> words, IDictionary<int, bool> memo)
    {
        if (index == s.Length)
        {
            return true;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        foreach (var word in words)
        {
            if (s.AsSpan(index).StartsWith(word) && Dfs(index + word.Length, s, words, memo))
            {
                return memo[index] = true;
            }
        }

        return memo[index] = false;
    }
}
