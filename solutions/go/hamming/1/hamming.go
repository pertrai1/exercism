package hamming

import (
	"errors"
	"strings"
)

func Distance(a, b string) (int, error) {
	var count int
	aSplit := strings.Split(a, "")
	bSplit := strings.Split(b, "")

	if len(aSplit) != len(bSplit) {
		return 0, errors.New("The strings are not the same length")
	}

	for i, v := range aSplit {
		if len(aSplit) == len(bSplit) && bSplit[i] != v {
			count++
		}
	}

	return count, nil
}
