package isogram

import (
	"strings"
	"unicode"
)

func IsIsogram(word string) bool {
	word = strings.ToLower(word)
	seen := map[rune]int{}

	for _, char := range word {
		if !unicode.IsLetter(char) {
			continue
		}
		if _, ok := seen[char]; ok {
			return false
		}
		seen[char]++
	}

	return true
}
