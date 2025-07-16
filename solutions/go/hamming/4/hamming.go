package hamming

import (
	"errors"
)

func Distance(a, b string) (distance int, err error) {
	distance = 0

	if len(a) != len(b) {
		return 0, errors.New("the strings are not the same length")
	}

	aRunes := []rune(a)
	bRunes := []rune(b)
	for i, aRune := range aRunes {
		if aRune != bRunes[i] {
			distance++
		}
	}

	return
}
