using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class Tribonacci
{
    public static int Calculate(int n)
    {
        var memo = new Dictionary<int, int>();
        return Helper(n, memo);
    }

    private static int Helper(int n, IDictionary<int, int> memo)
    {
        if (n == 0)
        {
            return 0;
        }

        if (n == 1 || n == 2)
        {
            return 1;
        }

        if (memo.TryGetValue(n, out var cached))
        {
            return cached;
        }

        memo[n] = Helper(n - 1, memo) + Helper(n - 2, memo) + Helper(n - 3, memo);
        return memo[n];
    }
}
