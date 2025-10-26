public final class FiveSort {
  private FiveSort() {
  }

  public static int[] sort(int[] nums) {
    int i = 0;
    int j = nums.length - 1;

    while (i < j) {
      if (nums[j] == 5) {
        j--;
        continue;
      }
      if (nums[i] == 5) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
      } else {
        i++;
      }
    }

    return nums;
  }
}
