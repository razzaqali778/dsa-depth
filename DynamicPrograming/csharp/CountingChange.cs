using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class CountingChange
{
    public static int CountWays(int amount, IReadOnlyList<int> coins)
    {
        var memo = new Dictionary<(int Remaining, int Index), int>();
        return Dfs(amount, 0, coins, memo);
    }

    private static int Dfs(int remaining, int index, IReadOnlyList<int> coins, IDictionary<(int, int), int> memo)
    {
        if (remaining == 0)
        {
            return 1;
        }

        if (index == coins.Count)
        {
            return 0;
        }

        var key = (remaining, index);
        if (memo.TryGetValue(key, out var cached))
        {
            return cached;
        }

        var ways = 0;
        var coin = coins[index];
        for (var qty = 0; qty * coin <= remaining; qty++)
        {
            ways += Dfs(remaining - qty * coin, index + 1, coins, memo);
        }

        memo[key] = ways;
        return ways;
    }
}
