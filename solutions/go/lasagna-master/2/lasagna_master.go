package lasagna

func PreparationTime(layers []string, prepTime int) int {
	if prepTime == 0 {
		return len(layers) * 2
	} else {
		return len(layers) * prepTime
	}
}

func Quantities(layers []string) (noodles int, sauce float64) {
	for _, l := range layers {
		switch(l) {
		case "noodles":
			noodles += 50
		case "sauce":
			sauce += 0.2
		}
	}
	return noodles, sauce
}

func AddSecretIngredient(friendsList []string, myList []string) {
	myList[len(myList) - 1] = friendsList[len(friendsList) - 1]
}

func ScaleRecipe(portions []float64, numberOfPortions int) []float64 {
	desiredQuantity := []float64{}

	for i := 0; i < len(portions); i++ {
		desiredQuantity = append(desiredQuantity, (portions[i] * float64(numberOfPortions)) / 2)
	}

	return desiredQuantity
}
