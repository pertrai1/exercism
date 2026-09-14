#!/usr/bin/env bash

# Read the arguments into a variable
input="$1"

# Count the digits
# input is a bare digit string so issues would arise with a negative number or leading 0. The tests don't test for those.
digits=${#input}

sum=0
# Loop over each digit
for (( i=0; i<digits; i++ )); do
  digit="${input:i:1}"
  # Raise digit to a power, accumulate a sum
  sum=$(( sum + digit ** digits ))
done

# Compare sum to the original, print true/false
if [[ sum -eq input ]]; then
  echo "true"
else
  echo "false"
fi
