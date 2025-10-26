using System.Collections.Generic;

namespace StackSolutions;

public static class NestingScore
{
    public static int Score(string brackets)
    {
        var stack = new Stack<int>();
        stack.Push(0);
        foreach (var ch in brackets)
        {
            if (ch == '[')
            {
                stack.Push(0);
            }
            else
            {
                var top = stack.Pop();
                var value = top == 0 ? 1 : 2 * top;
                var updated = stack.Pop() + value;
                stack.Push(updated);
            }
        }

        return stack.Pop();
    }
}
