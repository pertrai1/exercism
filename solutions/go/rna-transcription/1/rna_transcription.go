package strand

import (
	"strings"
)

var strands = map[string]string{
	"C": "G",
	"G": "C",
	"T": "A",
	"A": "U",
}

func ToRNA(dna string) string {
	var r string
	s := strings.Split(dna, "")
	if len(s) == 0 {
		return ""
	}
	for _, v := range s {
		r = r + strands[v]
	}
	return r
}
