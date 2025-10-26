package twopointers

// FiveSort moves all 5s to the end of the slice in-place.
func FiveSort(nums []int) []int {
	i, j := 0, len(nums)-1
	for i < j {
		if nums[j] == 5 {
			j--
			continue
		}
		if nums[i] == 5 {
			nums[i], nums[j] = nums[j], nums[i]
			i++
			j--
			continue
		}
		i++
	}
	return nums
}
