package thefarm

import (
	"errors"
	"fmt"
)

// See types.go for the types defined for this exercise.

// TODO: Define the SillyNephewError type here.
type SillyNephewError struct {
	numCows int
}

func (e *SillyNephewError) Error() string {
	return fmt.Sprintf("silly nephew, there cannot be %d cows", e.numCows)
}

// DivideFood computes the fodder amount per cow for the given cows.
func DivideFood(weightFodder WeightFodder, cows int) (float64, error) {
	fodder, err := weightFodder.FodderAmount()
	switch {
	case fodder < 0 && (err == nil || err == ErrScaleMalfunction):
		return 0, errors.New("negative fodder")
	case fodder < 0:
		return 0, err
	case cows == 0:
		return 0, errors.New("division by zero")
	case cows < 0:
		return 0, &SillyNephewError{numCows: cows}
	case err == ErrScaleMalfunction:
		return (fodder * 2) / float64(cows), nil
	case err != nil:
		return 0, err
	default:
		return fodder / float64(cows), nil
	}
}
