package purchase

const betterChoice = " is clearly the better choice."
const eightyPercent = 80.0 / 100.0
const fifyPercent = 50.0 / 100.0
const seventyPercent = 70.0 / 100.0

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	if kind == "car" || kind == "truck" {
		return true
	}
	return false
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	if option1 < option2 {
		return option1 + betterChoice
	}
	return option2 + betterChoice
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	if age < 3 {
		return eightyPercent * originalPrice
	} else if age >= 10 {
		return fifyPercent * originalPrice
	} else {
		return seventyPercent * originalPrice
	}
}
