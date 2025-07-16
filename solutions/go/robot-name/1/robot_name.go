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

	b := make([]byte, 5)
	b[0] = letters[rand.Intn(len(letters))]
	b[1] = letters[rand.Intn(len(letters))]
	b[2] = numbers[rand.Intn(len(numbers))]
	b[3] = numbers[rand.Intn(len(numbers))]
	b[4] = numbers[rand.Intn(len(numbers))]

	rand.Shuffle(3, func(i, j int) {
		b[i], b[j] = b[j], b[i]
	})

	r.name = string(b)
}
