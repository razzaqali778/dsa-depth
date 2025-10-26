using System.Text;

namespace TwoPointersSolutions;

public static class Compress
{
    public static string Run(string s)
    {
        if (string.IsNullOrEmpty(s))
        {
            return string.Empty;
        }

        var builder = new StringBuilder();
        var i = 0;
        while (i < s.Length)
        {
            var j = i + 1;
            while (j < s.Length && s[j] == s[i])
            {
                j++;
            }

            var count = j - i;
            if (count == 1)
            {
                builder.Append(s[i]);
            }
            else
            {
                builder.Append(count);
                builder.Append(s[i]);
            }

            i = j;
        }

        return builder.ToString();
    }
}
