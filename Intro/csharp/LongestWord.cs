namespace IntroSolutions;

public static class LongestWord
{
    public static string Solve(string sentence)
    {
        string longest = string.Empty;
        foreach (string word in sentence.Split(' ', System.StringSplitOptions.RemoveEmptyEntries))
        {
            if (word.Length >= longest.Length)
            {
                longest = word;
            }
        }

        return longest;
    }
}
