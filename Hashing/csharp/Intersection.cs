using System.Collections.Generic;
using System.Linq;

namespace HashingSolutions;

public static class Intersection
{
    public static IList<T> Solve<T>(IEnumerable<T> first, IEnumerable<T> second)
    {
        var lookup = new HashSet<T>(second);
        var added = new HashSet<T>();
        var result = new List<T>();

        foreach (var item in first)
        {
            if (lookup.Contains(item) && added.Add(item))
            {
                result.Add(item);
            }
        }

        return result;
    }
}
