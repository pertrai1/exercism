package techpalace

import (
	"bytes"
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	var b bytes.Buffer
	b.Write([]byte("Welcome to the Tech Palace, "))
	b.Write([]byte(strings.ToUpper(customer)))
	return b.String()
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	var b strings.Builder
	formatLineOfStars := strings.Repeat("*", numStarsPerLine)
	formatWelcomeMessage := "\n" + welcomeMsg + "\n"
	b.WriteString(formatLineOfStars)
	b.WriteString(formatWelcomeMessage)
	b.WriteString(formatLineOfStars)
	return b.String()
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	var b strings.Builder
	messageCleanedUp := strings.ReplaceAll(oldMsg, "*", "")
	b.WriteString(strings.TrimSpace(messageCleanedUp))
	return b.String()
}
