using System.Text;

namespace TwoPointersSolutions;

public static class Uncompress
{
    public static string Run(string s)
    {
        var builder = new StringBuilder();
        var i = 0;
        while (i < s.Length)
        {
            var j = i;
            while (j < s.Length && char.IsDigit(s[j]))
            {
                j++;
            }

            var count = int.Parse(s[i..j]);
            var ch = s[j];
            builder.Append(new string(ch, count));
            i = j + 1;
        }

        return builder.ToString();
    }
}
