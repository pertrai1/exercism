package hamming

import (
	"errors"
)

func Distance(a, b string) (distance int, err error) {
	distance = 0

	if len(a) != len(b) {
		return 0, errors.New("the strings are not the same length")
	}

	aRune := []rune(a)
	bRune := []rune(b)
	for i, runer := range aRune {
		if runer != bRune[i] {
			distance++
		}
	}

	return
}
