using System.Collections.Generic;

namespace DynamicProgrammingSolutions;

public static class NonAdjacentSum
{
    public static int MaxSum(IReadOnlyList<int> nums)
    {
        var memo = new Dictionary<int, int>();
        return Dfs(0, nums, memo);
    }

    private static int Dfs(int index, IReadOnlyList<int> nums, IDictionary<int, int> memo)
    {
        if (index >= nums.Count)
        {
            return 0;
        }

        if (memo.TryGetValue(index, out var cached))
        {
            return cached;
        }

        var include = nums[index] + Dfs(index + 2, nums, memo);
        var exclude = Dfs(index + 1, nums, memo);
        var best = include > exclude ? include : exclude;
        memo[index] = best;
        return best;
    }
}
