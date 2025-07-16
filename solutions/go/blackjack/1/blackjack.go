package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "ten", "jack", "queen", "king":
		return 10
	case "nine":
		return 9
	case "eight":
		return 8
	case "seven":
		return 7
	case "six":
		return 6
	case "five":
		return 5
	case "four":
		return 4
	case "three":
		return 3
	case "two":
		return 2
	}
	return 0
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var response string
	cardValue := ParseCard(card1) + ParseCard(card2)
	dealerCardValue := ParseCard(dealerCard)

	switch {
	case ParseCard(card1) == 11 && ParseCard(card2) == 11:
		response = "P"
	case cardValue == 21 && (dealerCardValue != 11 && dealerCardValue != 10):
		response = "W"
	case cardValue == 21 && (dealerCardValue == 11 || dealerCardValue == 10):
		response = "S"
	case (cardValue >= 17 && cardValue <= 20):
		response = "S"
	case (cardValue >= 12 && cardValue <= 16) && (dealerCardValue < 7):
		response = "S"
	case (cardValue >= 12 && cardValue <= 16) && (dealerCardValue >= 7):
		response = "H"
	case (cardValue <= 11):
		response = "H"
	}
	return response
}
