using System.Collections.Generic;

namespace StackSolutions;

public static class ReverseSomeChars
{
    public static string Reverse(string s, IEnumerable<char> chars)
    {
        var set = new HashSet<char>(chars);
        var stack = new Stack<char>();
        foreach (var ch in s)
        {
            if (set.Contains(ch))
            {
                stack.Push(ch);
            }
        }

        var result = new char[s.Length];
        for (var i = 0; i < s.Length; i++)
        {
            var ch = s[i];
            result[i] = set.Contains(ch) ? stack.Pop() : ch;
        }

        return new string(result);
    }
}
