package hamming

import (
	"errors"
)

func Distance(a, b string) (distance int, err error) {
	distance = 0

	if len(a) != len(b) {
		return 0, errors.New("the strings are not the same length")
	}

	for i, letter := range a {
		if letter != []rune(b)[i] {
			distance++
		}
	}

	return
}
