package clock

import "fmt"

// Define the Clock type here.
type Clock struct {
	minutes int
}

func New(h, m int) Clock {
	total := m + h*60
	total %= 24 * 60
	if total < 0 {
		total += 24 * 60
	}
	return Clock{total}
}

func (c Clock) Add(m int) Clock {
	return New(0, c.minutes+m)
}

func (c Clock) Subtract(m int) Clock {
	return New(0, c.minutes-m)
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.minutes/60, c.minutes%60)
}
