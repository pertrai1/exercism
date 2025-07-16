package proverb

import "fmt"

var multipleSaying = "For want of a %s the %s was lost."
var oneSaying = "And all for the want of a %s."

// Proverb should have a comment documenting it.
func Proverb(rhyme []string) []string {
	sayings := make([]string, len(rhyme))

	for i := range rhyme {
		if i < len(rhyme)-1 {
			sayings[i] = fmt.Sprintf(multipleSaying, rhyme[i], rhyme[i+1])
		} else {
			sayings[i] = fmt.Sprintf(oneSaying, rhyme[0])
		}
	}

	return sayings
}
