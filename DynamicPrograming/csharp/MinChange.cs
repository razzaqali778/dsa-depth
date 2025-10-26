using System;
using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class MinChange
{
    public static int MinCoins(int amount, IReadOnlyList<int> coins)
    {
        var memo = new Dictionary<int, int>();
        var answer = Dfs(amount, coins, memo);
        return answer >= int.MaxValue / 2 ? -1 : answer;
    }

    private static int Dfs(int remaining, IReadOnlyList<int> coins, IDictionary<int, int> memo)
    {
        if (remaining < 0)
        {
            return int.MaxValue / 2;
        }

        if (remaining == 0)
        {
            return 0;
        }

        if (memo.TryGetValue(remaining, out var cached))
        {
            return cached;
        }

        var best = int.MaxValue / 2;
        foreach (var coin in coins)
        {
            best = Math.Min(best, 1 + Dfs(remaining - coin, coins, memo));
        }

        memo[remaining] = best;
        return best;
    }
}
