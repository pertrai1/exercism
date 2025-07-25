// Package triangle should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package triangle

type Kind string

const (
	NaT Kind = "NaT"
	Equ Kind = "Equ"
	Iso Kind = "Iso"
	Sca Kind = "Sca"
)

// KindFromSides should have a comment documenting it.
func KindFromSides(a, b, c float64) Kind {
	if !isValidTriangle(a, b, c) {
		return NaT
	}

	var k Kind

	switch {
	case a == b && a == c:
		k = Equ
	case a != b && b != c && a != c:
		k = Sca
	case b == c || a == c || a == b:
		k = Iso
	}

	return k
}

func isValidTriangle(a, b, c float64) bool {
	switch {
	case a == 0 && b == 0 && c == 0:
		return false
	case a < 0 || b < 0 || c < 0:
		return false
	case a+b < c:
		return false
	case a+c < b:
		return false
	case b+c < a:
		return false
	default:
		return true
	}
}
