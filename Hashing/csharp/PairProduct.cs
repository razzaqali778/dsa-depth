using System;
using System.Collections.Generic;

namespace HashingSolutions;

public static class PairProduct
{
    public static (int, int) Solve(IReadOnlyList<int> numbers, int targetProduct)
    {
        var indices = new Dictionary<int, int>();

        for (var i = 0; i < numbers.Count; i++)
        {
            var value = numbers[i];
            if (value == 0)
            {
                if (targetProduct == 0 && indices.TryGetValue(0, out var firstIndex))
                {
                    return (firstIndex, i);
                }

                if (!indices.ContainsKey(0))
                {
                    indices[0] = i;
                }

                continue;
            }

            if (targetProduct % value != 0)
            {
                if (!indices.ContainsKey(value))
                {
                    indices[value] = i;
                }
                continue;
            }

            var complement = targetProduct / value;
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
