package strand

import (
	"strings"
)

func strandComplement(s byte) byte {
	switch s {
	case 'C':
		return 'G'
	case 'G':
		return 'C'
	case 'T':
		return 'A'
	case 'A':
		return 'U'
	default:
		panic(string(s) + " is invalid")
	}
}

func ToRNA(dna string) string {
	var r strings.Builder
	if len(dna) == 0 {
		return ""
	}
	for i := range dna {
		r.WriteByte(strandComplement(dna[i]))
	}
	return r.String()
}
