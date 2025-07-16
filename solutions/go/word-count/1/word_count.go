package wordcount

import (
	"regexp"
	"strings"
)

type Frequency map[string]int

func WordCount(phrase string) Frequency {
	wordRx := regexp.MustCompile(`(\w+('\w+)?)`)
	words := wordRx.FindAllString(strings.ToLower(phrase), -1)

	result := make(Frequency)

	for _, word := range words {
		result[word]++
	}

	return result
}
