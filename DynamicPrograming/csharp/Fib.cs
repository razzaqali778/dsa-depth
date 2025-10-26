using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class Fib
{
    public static int Calculate(int n)
    {
        var memo = new Dictionary<int, int>();
        return Helper(n, memo);
    }

    private static int Helper(int n, IDictionary<int, int> memo)
    {
        if (n == 0 || n == 1)
        {
            return n;
        }

        if (memo.TryGetValue(n, out var cached))
        {
            return cached;
        }

        memo[n] = Helper(n - 1, memo) + Helper(n - 2, memo);
        return memo[n];
    }
}
