package thefarm

import (
	"errors"
	"fmt"
)

type SillyNephewError struct {
	numCows int
}

func (e *SillyNephewError) Error() string {
	return fmt.Sprintf("silly nephew, there cannot be %d cows", e.numCows)
}

// DivideFood computes the fodder amount per cow for the given cows.
func DivideFood(weightFodder WeightFodder, cows int) (float64, error) {
	fodder, err := weightFodder.FodderAmount()

	if err != nil && err != ErrScaleMalfunction {
		return 0, err
	} else if err != nil {
		fodder *= 2
	}

	switch {
	case cows < 0:
		return 0, &SillyNephewError{numCows: cows}
	case cows == 0:
		return 0, errors.New("division by zero")
	case fodder < 0:
		return 0, errors.New("negative fodder")
	default:
		return fodder / float64(cows), nil
	}
}
