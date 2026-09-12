#!/usr/bin/env bash

declare -A allergens=(
  [eggs]=1
  [peanuts]=2
  [shellfish]=4
  [strawberries]=8
  [tomatoes]=16
  [chocolate]=32
  [pollen]=64
  [cats]=128
)

ordered_allergens=(eggs peanuts shellfish strawberries tomatoes chocolate pollen cats)

allergic_to () {
  local score=$1 item=$2
  if (( score & allergens[$item] )); then
    echo "true"
  else
    echo "false"
  fi
}

list_allergies () {
  local score=$1
  local result=()

  for name in "${ordered_allergens[@]}"; do
    if (( score & allergens[$name] )); then
      result+=( "$name" )
    fi
  done

  echo "${result[*]}"
}

main () {
  local score=$1 command=$2

  case $command in
    allergic_to) allergic_to "$score" "$3" ;;
    list)        list_allergies "$score" ;;
    *)           echo "unknown command: $command" >&2; exit 1 ;;
  esac
}

main "$@"

