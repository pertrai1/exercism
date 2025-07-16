package letter

// FreqMap records the frequency of each rune in a given text.
type FreqMap map[rune]int

// Frequency counts the frequency of each rune in a given text and returns this
// data as a FreqMap.
func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

func ConcurrentFrequency(l []string) FreqMap {
	result := FreqMap{}
	ch := make(chan FreqMap, len(l))

	for _, words := range l {
		go func(w string) {
			ch <- Frequency(w)
		}(words)
	}

	for range l {
		o := <-ch
		for k, v := range o {
			result[k] += v
		}
	}

	return result
}
