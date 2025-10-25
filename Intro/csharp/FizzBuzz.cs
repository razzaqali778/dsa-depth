using System.Collections.Generic;

namespace IntroSolutions;

public static class FizzBuzz
{
    public static IList<object> Solve(int n)
    {
        var result = new List<object>();
        for (int i = 1; i <= n; i++)
        {
            bool fizz = i % 3 == 0;
            bool buzz = i % 5 == 0;
            if (fizz && buzz)
            {
                result.Add("fizzbuzz");
            }
            else if (fizz)
            {
                result.Add("fizz");
            }
            else if (buzz)
            {
                result.Add("buzz");
            }
            else
            {
                result.Add(i);
            }
        }

        return result;
    }
}
