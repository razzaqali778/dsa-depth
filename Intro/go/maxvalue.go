
package main

import (
	"fmt"
	"math"
)

func maxValue(numbers []float64) float64 {
	max := math.Inf(-1)
	for _, num := range numbers {
		if num > max {
			max = num
		}
	}
	return max
}

func main() {
	fmt.Println(maxValue([]float64{1.2, 5.6, 3.4})) // 5.6
	fmt.Println(maxValue([]float64{}))              // -Inf
}
