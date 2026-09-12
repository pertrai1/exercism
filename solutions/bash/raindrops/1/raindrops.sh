#!/usr/bin/env bash

main () {
    num=$1
    result=""
   
    if (( num % 3 == 0 )); then
        result+="Pling"
    fi
    if (( num % 5 == 0 )); then
        result+="Plang"
    fi
    if (( num % 7 == 0 )); then
        result+="Plong"
    fi

    if [[ -z "$result" ]]; then
        result="$num"
    fi

    echo "$result"
}

main "$@"