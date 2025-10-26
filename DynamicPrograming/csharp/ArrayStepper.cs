using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class ArrayStepper
{
    public static bool CanReach(int[] numbers)
    {
        if (numbers.Length == 0)
        {
            return true;
        }

        var memo = new Dictionary<int, bool>();
        return Dfs(0, numbers, memo);
    }

    private static bool Dfs(int index, IReadOnlyList<int> numbers, IDictionary<int, bool> memo)
    {
        if (index >= numbers.Count - 1)
        {
            return true;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        var maxStep = numbers[index];
        for (var step = 1; step <= maxStep; step++)
        {
            if (Dfs(index + step, numbers, memo))
            {
                return memo[index] = true;
            }
        }

        return memo[index] = false;
    }
}
