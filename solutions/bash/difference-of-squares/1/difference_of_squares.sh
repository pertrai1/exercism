#!/usr/bin/env bash

sum_of_squares() {
  local n=$1
  echo $(( n * (n + 1) * (2 * n + 1) / 6 ))
}

square_of_sum() {
  local n=$1
  echo $(( (n * (n + 1) / 2) ** 2 ))
}

difference() {
  local a b
  a=$(square_of_sum "$1")
  b=$(sum_of_squares "$1")
  echo $(( a - b ))
}

usage() {
  echo "usage: difference_of_squares.sh {sum_of_squares|square_of_sum|difference} N" >&2
  exit 1
}

main() {
  if (( $# != 2 )); then
    usage
  elif [[ ! $2 =~ ^[0-9]+$ ]]; then
    echo "error: N must be a non-negative integer, got '$2'" >&2
    exit 1
  fi

  case "$1" in
    sum_of_squares) sum_of_squares "$2" ;;
    square_of_sum)  square_of_sum "$2" ;;
    difference)     difference "$2" ;;
    *)              usage "$1" ;;
  esac
}

main "$@"
