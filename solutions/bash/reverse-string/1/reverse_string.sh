#!/usr/bin/env bash

reversed=""
str="$1"

for (( i=${#str}; i>=0; i-- )); do
    reversed+="${str:i:1}"
done

echo "$reversed"