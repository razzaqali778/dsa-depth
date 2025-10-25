using System;
using System.Collections.Generic;

namespace HashingSolutions;

public static class PairSum
{
    public static (int, int) Solve(IReadOnlyList<int> numbers, int targetSum)
    {
        var indices = new Dictionary<int, int>();
        for (var i = 0; i < numbers.Count; i++)
        {
            var value = numbers[i];
            var complement = targetSum - value;
            if (indices.TryGetValue(complement, out var index))
            {
                return (index, i);
            }

            if (!indices.ContainsKey(value))
            {
                indices[value] = i;
            }
        }

        throw new InvalidOperationException("Pair not found");
    }
}
