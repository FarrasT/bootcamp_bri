package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(find_most_close(1, -2))
	fmt.Println(find_most_close(11, 12))
	fmt.Println(find_most_close(8, 12))
	fmt.Println(find_most_close(11, 9))

	fmt.Println(find_most_close_array(3, 4, 3, 3, 15, 1, 5))
	fmt.Println(find_most_close_array(1, 2, 3, 4, 5))

	fmt.Println(find_same_number_in_row(1, 1, 1, 2, 3, 4, 1))
	fmt.Println(find_same_number_in_row(1, 1, 2, 3, 4, 1, 1, 2, 2, 2))
	fmt.Println(find_same_number_in_row(1, 1, 2, 3, 4, 1))

	fmt.Println(find_same_number_in_row_closure(1, 1, 2, 3, 4, 1, 1, 2, 2, 2))
	return_func := return_closure(1, 20, 937, 23, 92)
	fmt.Println(return_func())
}

func find_most_close(a, b int) int {
	switch {
	case int(math.Abs(float64(10-a))) < int(math.Abs(float64(10-b))):
		return a
	case int(math.Abs(float64(10-a))) > int(math.Abs(float64(10-b))):
		return b
	default:
		return 0
	}
}

func find_most_close_array(input ...int) int {
	value := make(map[int]int)
	var result int

	for i := 0; i < len(input); i++ {
		_, existed := value[int(math.Abs(float64(10-input[i])))]
		if existed {
			return 0
		}
		value[int(math.Abs(float64(10-input[i])))] = input[i]
	}
	for _, value := range value {
		result = value
	}
	return result
}

func find_same_number_in_row(numbers ...int) bool {
	for i := 0; i < len(numbers)-2; i++ {
		if (numbers[i] == numbers[i+1]) && (numbers[i+1] == numbers[i+2]) {
			return true
		}
	}
	return false
}

var find_same_number_in_row_closure = func(numbers ...int) bool {
	for i := 0; i < len(numbers)-2; i++ {
		if (numbers[i] == numbers[i+1]) && (numbers[i+1] == numbers[i+2]) {
			return true
		}
	}
	return false
}

func return_closure(numbers ...int) func() []int {
	return func() []int {
		var array = []int{}
		for _, v := range numbers {
			if v%10 != 0 {
				array = append(array, v%10)
			}
		}
		return array
	}
}
