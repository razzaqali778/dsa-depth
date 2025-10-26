namespace TwoPointersSolutions;

public static class FiveSort
{
    public static int[] Sort(int[] nums)
    {
        var i = 0;
        var j = nums.Length - 1;
        while (i < j)
        {
            if (nums[j] == 5)
            {
                j--;
                continue;
            }

            if (nums[i] == 5)
            {
                (nums[i], nums[j]) = (nums[j], nums[i]);
                i++;
                j--;
            }
            else
            {
                i++;
            }
        }

        return nums;
    }
}
