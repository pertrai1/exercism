package luhn

import (
	"strconv"
	"strings"
)

func Valid(id string) bool {
	id = strings.ReplaceAll(id, " ", "")

	if len(id) < 2 {
		return false
	}

	sum := 0
	runes := []rune(id)

	for i := range runes {
		char := runes[len(runes)-1-i]
		number, err := strconv.Atoi(string(char))
		if err != nil {
			return false
		}
		if i%2 == 1 {
			double := 2 * number
			if double > 9 {
				double -= 9
			}
			sum += double
		} else {
			sum += number
		}
	}
	return sum%10 == 0
}
