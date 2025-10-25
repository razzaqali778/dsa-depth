using System.Collections.Generic;

namespace IntroSolutions;

public static class MaxValue
{
    public static double Solve(IEnumerable<double> numbers)
    {
        double max = double.NegativeInfinity;
        foreach (double number in numbers)
        {
            if (number > max)
            {
                max = number;
            }
        }

        return max;
    }
}
