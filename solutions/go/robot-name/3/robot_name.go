package robotname

import (
	"math/rand"
	"time"
)

type Robot struct {
	name string
}

var (
	letters = []byte("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	numbers = []byte("0123456789")
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

func (r *Robot) Name() (string, error) {
	if r.name == "" {
		r.Reset()
	}

	return r.name, nil
}

func (r *Robot) Reset() {
	b := []byte{
		letters[rand.Intn(len(letters))],
		letters[rand.Intn(len(letters))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
	}

	r.name = string(b)
}
