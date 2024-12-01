#!/bin/bash

# Assign arguments to variables for better readability
DAY=$1
PART=$2

if [ -z "$DAY" ]; then
    DAY=$(find . -maxdepth 1 -type d -name '[0-9]*' | awk -F'/' '{print $NF}' | sort -n | tail -1)
fi

execute_script() {
    local part=$1
    echo "Executing AoC 2024, Day $DAY, Part $part"

    node "$DAY/part$part.js"
}

# Execute based on whether PART is provided or not
if [ -z "$PART" ]; then
    # Execute for both PART 1 and 2
    execute_script 1
    execute_script 2
else
    # Execute for the specified PART
    execute_script $PART
fi