package techpalace

import (
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return "Welcome to the Tech Palace, " + strings.ToUpper(customer)
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	formatLineOfStars := strings.Repeat("*", numStarsPerLine)
	formatWelcomeMessage := "\n" + welcomeMsg + "\n"
	return formatLineOfStars + formatWelcomeMessage + formatLineOfStars
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	messageCleanedUp := strings.ReplaceAll(oldMsg, "*", "")
	return strings.TrimSpace(messageCleanedUp)
}
