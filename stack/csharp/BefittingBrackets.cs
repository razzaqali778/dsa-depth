namespace StackSolutions;

public static class BefittingBrackets
{
    public static bool IsValid(string s)
    {
        var stack = new Stack<char>();
        foreach (var ch in s)
        {
            switch (ch)
            {
                case '(':
                case '[':
                case '{':
                    stack.Push(ch);
                    break;
                case ')':
                case ']':
                case '}':
                    if (stack.Count == 0 || stack.Pop() != Matching(ch))
                    {
                        return false;
                    }
                    break;
            }
        }

        return stack.Count == 0;
    }

    private static char Matching(char closing) => closing switch
    {
        ')' => '(',
        ']' => '[',
        '}' => '{',
        _ => '?'
    };
}
