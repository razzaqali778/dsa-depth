using System.Collections.Generic;

namespace HashingSolutions;

public static class IntersectionWithDupes
{
    public static IList<T> Solve<T>(IEnumerable<T> first, IEnumerable<T> second)
    {
        var counts = new Dictionary<T, int>();
        foreach (var value in first)
        {
            counts.TryGetValue(value, out int current);
            counts[value] = current + 1;
        }

        var result = new List<T>();
        foreach (var value in second)
        {
            if (counts.TryGetValue(value, out int remaining) && remaining > 0)
            {
                result.Add(value);
                counts[value] = remaining - 1;
            }
        }

        return result;
    }
}
