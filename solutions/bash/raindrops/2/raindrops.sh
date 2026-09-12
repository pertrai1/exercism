#!/usr/bin/env bash

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

echo "${result:-$num}"
