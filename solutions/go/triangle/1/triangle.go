// Package triangle should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package triangle

// Notice KindFromSides() returns this type. Pick a suitable data type.
type Kind string

const (
	// Pick values for the following identifiers used by the test program.
	NaT = "NaT"
	Equ = "Equ"
	Iso = "Iso"
	Sca = "Sca"
)

// KindFromSides should have a comment documenting it.
func KindFromSides(a, b, c float64) Kind {
	var k Kind
	if a == 0 && b == 0 && c == 0 {
		k = NaT
		return k
	}
	if a < 0 || b < 0 || c < 0 {
		k = NaT
		return k
	}
	if a+b < c {
		k = NaT
		return k
	}
	if a+c < b {
		k = NaT
		return k
	}
	if b+c < a {
		k = NaT
		return k
	}
	if a == b && a == c {
		k = Equ
		return k
	}
	if a != b && b != c && a != c {
		k = Sca
		return k
	}
	if b == c || a == c || a == b {
		k = Iso
		return k
	}

	return k
}
