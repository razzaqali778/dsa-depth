using System.Linq;
using System.Text;

namespace StackSolutions;

public static class DecompressBraces
{
    public static string Run(string input)
    {
        var stack = new Stack<string>();
        foreach (var ch in input)
        {
            if (char.IsDigit(ch))
            {
                stack.Push(ch.ToString());
            }
            else if (ch == '{')
            {
                continue;
            }
            else if (ch == '}')
            {
                var segment = new StringBuilder();
                while (stack.Count > 0 && !int.TryParse(stack.Peek(), out _))
                {
                    segment.Insert(0, stack.Pop());
                }

                var count = int.Parse(stack.Pop());
                stack.Push(string.Concat(Enumerable.Repeat(segment.ToString(), count)));
            }
            else
            {
                stack.Push(ch.ToString());
            }
        }

        return string.Concat(stack.Reverse());
    }
}
