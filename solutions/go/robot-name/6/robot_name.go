package robotname

import (
	"math/rand"
	"time"
)

type Robot struct {
	name string
}

var names = make(map[string]bool)

var (
	letters = []byte("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	numbers = []byte("0123456789")
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

func (r *Robot) Name() (string, error) {
	if r.name != "" {
		return r.name, nil
	}

	r.name = setRobotoName()
	if !names[r.name] {
		names[r.name] = true
		return r.name, nil
	}
	return r.Name()
}

func (r *Robot) Reset() {
	r.name = ""
}

func setRobotoName() string {
	b := []byte{
		letters[rand.Intn(len(letters))],
		letters[rand.Intn(len(letters))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
		numbers[rand.Intn(len(numbers))],
	}
	return string(b)
}
