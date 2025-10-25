using System;
using System.Collections.Generic;

namespace RecursionSolutions;

public static class Fibonacci
{
    private static readonly Dictionary<int, long> Memo = new()
    {
        { 0, 0 },
        { 1, 1 }
    };

    public static long Solve(int n)
    {
        if (n < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(n), "n must be non-negative");
        }

        if (Memo.TryGetValue(n, out var value))
        {
            return value;
        }

        value = Solve(n - 1) + Solve(n - 2);
        Memo[n] = value;
        return value;
    }
}
