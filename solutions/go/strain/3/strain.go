package strain

type Ints []int
type Lists [][]int
type Strings []string

func (i Ints) Keep(filter func(int) bool) (output Ints) {
	for _, v := range i {
		if filter(v) {
			output = append(output, v)
		}
	}
	return
}

func (i Ints) Discard(filter func(int) bool) Ints {
	return i.Keep(func(x int) bool { return !filter(x) })
}

func (l Lists) Keep(filter func([]int) bool) (output Lists) {
	for _, v := range l {
		if filter(v) {
			output = append(output, v)
		}
	}
	return
}

func (s Strings) Keep(filter func(string) bool) (output Strings) {
	for _, v := range s {
		if filter(v) {
			output = append(output, v)
		}
	}
	return
}
