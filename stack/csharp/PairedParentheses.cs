namespace StackSolutions;

public static class PairedParentheses
{
    public static bool Check(string s)
    {
        var balance = 0;
        foreach (var ch in s)
        {
            if (ch == '(')
            {
                balance++;
            }
            else if (ch == ')')
            {
                balance--;
                if (balance < 0)
                {
                    return false;
                }
            }
        }

        return balance == 0;
    }
}
