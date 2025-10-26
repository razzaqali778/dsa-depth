using System;
using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class QuickestConcat
{
    public static int Quickest(string s, IReadOnlyList<string> words)
    {
        var memo = new Dictionary<int, int>();
        var result = Dfs(0, s, words, memo);
        return result >= int.MaxValue / 2 ? -1 : result;
    }

    private static int Dfs(int index, string s, IReadOnlyList<string> words, IDictionary<int, int> memo)
    {
        if (index == s.Length)
        {
            return 0;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        var best = int.MaxValue / 2;
        foreach (var word in words)
        {
            if (s.AsSpan(index).StartsWith(word))
            {
                best = Math.Min(best, 1 + Dfs(index + word.Length, s, words, memo));
            }
        }

        memo[index] = best;
        return best;
    }
}
