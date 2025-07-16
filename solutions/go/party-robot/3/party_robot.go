package partyrobot

import (
	"fmt"
	"strings"
)

// Welcome greets a person by name.
func Welcome(name string) string {
	return fmt.Sprintf("Welcome to my party, %s!", name)
}

// HappyBirthday wishes happy birthday to the birthday person and exclaims their age.
func HappyBirthday(name string, age int) string {
	return fmt.Sprintf("Happy birthday %s! You are now %d years old!", name, age)
}

// AssignTable assigns a table to each guest.
func AssignTable(name string, table int, neighbor, direction string, distance float64) string {
	var b strings.Builder
	b.WriteString(Welcome(name))
	b.WriteString("\n" + fmt.Sprintf("You have been assigned to table %03d. ", table))
	b.WriteString(fmt.Sprintf("Your table is %s, ", direction))
	b.WriteString(fmt.Sprintf("exactly %.1f meters from here.", distance))
	b.WriteString("\n" + fmt.Sprintf("You will be sitting next to %s.", neighbor))
	return b.String()
}
