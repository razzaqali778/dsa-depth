using System.Collections.Generic;
using System.Linq;

namespace RecursionSolutions;

public static class SumNumbersRecursive
{
    public static int Solve(IReadOnlyList<int> numbers)
    {
        return SumFromIndex(numbers, 0);
    }

    private static int SumFromIndex(IReadOnlyList<int> numbers, int index)
    {
        if (index >= numbers.Count)
        {
            return 0;
        }

        return numbers[index] + SumFromIndex(numbers, index + 1);
    }
}
