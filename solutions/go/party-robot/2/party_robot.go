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
	welcomeMessage := Welcome(name)
	tableAssignment := fmt.Sprintf("You have been assigned to table %03d. ", table)
	tableDirection := fmt.Sprintf("Your table is %s, ", direction)
	tableDistance := fmt.Sprintf("exactly %.1f meters from here.", distance)
	assignedNeighbor := fmt.Sprintf("You will be sitting next to %s.", neighbor)
	b.WriteString(welcomeMessage)
	b.WriteString("\n" + tableAssignment)
	b.WriteString(tableDirection)
	b.WriteString(tableDistance)
	b.WriteString("\n" + assignedNeighbor)
	return b.String()
}
