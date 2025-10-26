using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class SumPossible
{
    public static bool IsPossible(int amount, IReadOnlyList<int> numbers)
    {
        var memo = new Dictionary<int, bool>();
        return Dfs(amount, numbers, memo);
    }

    private static bool Dfs(int remaining, IReadOnlyList<int> numbers, IDictionary<int, bool> memo)
    {
        if (remaining == 0)
        {
            return true;
        }

        if (remaining < 0)
        {
            return false;
        }

        if (memo.TryGetValue(remaining, out var cached))
        {
            return cached;
        }

        foreach (var num in numbers)
        {
            if (Dfs(remaining - num, numbers, memo))
            {
                memo[remaining] = true;
                return true;
            }
        }

        memo[remaining] = false;
        return false;
    }
}
