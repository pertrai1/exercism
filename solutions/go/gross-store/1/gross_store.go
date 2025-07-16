package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	return map[string]int {
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen": 6,
		"dozen": 12,
		"small_gross": 120,
		"gross": 144,
		"great_gross": 1728,
	}
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	 return make(map[string]int)
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	value, exists := units[unit]
	if exists {
		bill[item] += value
		return true
	}
	return false
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	unitQty, unitExists := units[unit]
	// Return false if the given unit is not in the units map.
	if !unitExists {
		return false
	}
	// Return false if the given item is not in the bill
	billQty, billExists := bill[item]
	if !billExists {
		return false
	}

	newQty := billQty - unitQty
	// Return false if the new quantity would be less than 0.
	if newQty < 0 {
		return false
	}

	// If the new quantity is 0, completely remove the item from the bill then return true.
	if newQty == 0 {
		delete(bill, item)
		return true
	}

	// Otherwise, reduce the quantity of the item and return true.
	bill[item] -= unitQty
	return true
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	qty, exists := bill[item]
	return qty, exists
}
