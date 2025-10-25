using System;

namespace RecursionSolutions;

public static class Factorial
{
    public static long Solve(int n)
    {
        if (n < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(n), "n must be non-negative");
        }

        if (n <= 1)
        {
            return 1;
        }

        return n * Solve(n - 1);
    }
}
