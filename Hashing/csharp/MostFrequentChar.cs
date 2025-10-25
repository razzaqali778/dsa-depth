using System.Collections.Generic;

namespace HashingSolutions;

public static class MostFrequentChar
{
    public static char Solve(string input)
    {
        var counts = new Dictionary<char, int>();
        foreach (char c in input)
        {
            counts.TryGetValue(c, out int value);
            counts[c] = value + 1;
        }

        char best = '\0';
        var bestCount = -1;
        foreach (char c in input)
        {
            var current = counts[c];
            if (current > bestCount)
            {
                best = c;
                bestCount = current;
            }
        }

        return best;
    }
}
