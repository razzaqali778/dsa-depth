using System;
using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class SummingSquares
{
    public static int MinSquares(int n)
    {
        var memo = new Dictionary<int, int>();
        return Dfs(n, memo);
    }

    private static int Dfs(int value, IDictionary<int, int> memo)
    {
        if (value == 0)
        {
            return 0;
        }

        if (memo.TryGetValue(value, out var cached))
        {
            return cached;
        }

        var best = int.MaxValue / 2;
        for (var i = 1; i * i <= value; i++)
        {
            best = Math.Min(best, 1 + Dfs(value - i * i, memo));
        }

        memo[value] = best;
        return best;
    }
}
