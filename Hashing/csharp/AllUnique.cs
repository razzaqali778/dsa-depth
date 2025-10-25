using System.Collections.Generic;

namespace HashingSolutions;

public static class AllUnique
{
    public static bool Solve<T>(IEnumerable<T> items)
    {
        var seen = new HashSet<T>();
        foreach (var item in items)
        {
            if (!seen.Add(item))
            {
                return false;
            }
        }

        return true;
    }
}
