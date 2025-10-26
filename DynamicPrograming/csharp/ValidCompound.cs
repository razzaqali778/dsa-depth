using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace DynamicProgrammingSolutions;

public static class ValidCompound
{
    public static bool IsValid(string compound, IEnumerable<string> elements)
    {
        var lowerCompound = compound.ToLower(CultureInfo.InvariantCulture);
        var lowerElements = elements.Select(e => e.ToLower(CultureInfo.InvariantCulture)).ToArray();
        var memo = new Dictionary<int, bool>();
        return Dfs(0, lowerCompound, lowerElements, memo);
    }

    private static bool Dfs(int index, string compound, IReadOnlyList<string> elements, IDictionary<int, bool> memo)
    {
        if (index == compound.Length)
        {
            return true;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        foreach (var element in elements)
        {
            if (index + element.Length <= compound.Length &&
                compound.AsSpan(index, element.Length).SequenceEqual(element.AsSpan()) &&
                Dfs(index + element.Length, compound, elements, memo))
            {
                memo[index] = true;
                return true;
            }
        }

        memo[index] = false;
        return false;
    }
}
