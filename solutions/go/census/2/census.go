// Package census simulates a system used to collect census data.
package census

// Resident represents a resident in this city.
type Resident struct {
	Name    string
	Age     int
	Address map[string]string
}

// NewResident registers a new resident in this city.
func NewResident(name string, age int, address map[string]string) *Resident {
	return &Resident{
		Name:		name,
		Age: 		age,
		Address: address,
	}
}

// HasRequiredInfo determines if a given resident has all of the required information.
func (r *Resident) HasRequiredInfo() bool {
	// Before doing so I also checked that the Address map is not nil
	if r.Address == nil || len(r.Address) == 0 {
		return false
	}

	hasCorrectAddress := true

	// decided to iterate the keys
	for key, value := range r.Address {
		// if an unknown key was found, to return false
		// figuring something like street: ""
		if key == "street" && value == "" {
			hasCorrectAddress = false
		}
		// it should return false if the key is not named street
		if key != "street" {
			hasCorrectAddress = false
		}
	}

	return r.Name != "" && hasCorrectAddress
	// return r.Name != "" && r.Address["street"] != ""
}

// Delete deletes a resident's information.
func (r *Resident) Delete() {
	*r = Resident{}
}

// Count counts all residents that have provided the required information.
func Count(residents []*Resident) int {
	var result int
	for _, r := range residents {
		if r.HasRequiredInfo() {
			result++
		}
	}
	return result
}
