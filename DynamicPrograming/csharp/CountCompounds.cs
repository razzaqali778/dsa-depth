using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace DynamicProgrammingSolutions;

public static class CountCompounds
{
    public static int Count(string compound, IEnumerable<string> elements)
    {
        var lowerCompound = compound.ToLower(CultureInfo.InvariantCulture);
        var lowerElements = elements.Select(e => e.ToLower(CultureInfo.InvariantCulture)).ToArray();
        var memo = new Dictionary<int, int>();
        return Dfs(0, lowerCompound, lowerElements, memo);
    }

    private static int Dfs(int index, string compound, IReadOnlyList<string> elements, IDictionary<int, int> memo)
    {
        if (index == compound.Length)
        {
            return 1;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        var total = 0;
        foreach (var element in elements)
        {
            if (index + element.Length <= compound.Length &&
                compound.AsSpan(index, element.Length).SequenceEqual(element.AsSpan()))
            {
                total += Dfs(index + element.Length, compound, elements, memo);
            }
        }

        memo[index] = total;
        return total;
    }
}
