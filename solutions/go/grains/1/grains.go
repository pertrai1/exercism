package grains

import (
	"errors"
)

func Square(number int) (uint64, error) {
	if number < 1 || number > 64 {
		return 0, errors.New("The number should be between 1 and 64")
	}

	total := 1
	for i := 1; i < number; i++ {
		total *= 2
	}
	return uint64(total), nil
}

func Total() uint64 {
	return uint64(1<<64 - 1)
}
