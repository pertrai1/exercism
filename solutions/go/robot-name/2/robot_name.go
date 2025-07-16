package robotname

import "math/rand"

type Robot struct {
	name string
}

func (r *Robot) Name() (string, error) {
	if r.name == "" {
		r.Reset()
	}

	return r.name, nil
}

func (r *Robot) Reset() {
	var letters = []byte("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	var numbers = []byte("0123456789")

	b := []byte{
		letters[rand.Intn(len(letters))],
		letters[rand.Intn(len(letters))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
	}

	rand.Shuffle(3, func(i, j int) {
		b[i], b[j] = b[j], b[i]
	})

	r.name = string(b)
}
