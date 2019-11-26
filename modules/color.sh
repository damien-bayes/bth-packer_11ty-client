#!/bin/bash

#####################################
# Name: color.sh
# Initial author: Damien Bayes <damien.bayes.db@gmail.com>
# Contributors: None
# Version: 1.0.0
# Description: None
# Usage:
# - sudo bash console.sh [options]
#####################################

# ##################################
# Colors
# ##################################

declare -A colors

colors=(
    ["resetColor"]="\e[0m"
    ["noColor"]="\033[0m"
    ["redColor"]="\033[0;31m"
    ["greenColor"]="\033[0;32m"
    ["orangeColor"]="\033[0;33m"
    ["blueColor"]="\033[0;34m"
    ["purpleColor"]="\033[0;35m"
    ["cyanColor"]="\033[0;36m"
    ["lightGrayColor"]="\033[0;37m"
    ["darkGrayColor"]="\033[1;30m"
    ["lightGreenColor"]="\033[1;31m"
    ["lightGreenColor"]="\033[1;32m"
    ["yellowColor"]="\033[1;33m"
    ["lightBlueColor"]="\033[1;34m"
    ["lightPurpleColor"]="\033[1;35m"
    ["lightCyanColor"]="\033[1;36m"
    ["whiteColor"]="\033[1;37m"
)

function writeColoredString () {
    color="${colors["whiteColor"]}"

    for i in "${!colors[@]}"; do
        if [[ "${i}" == "$2" ]]; then
            color="${colors[$i]}"
        fi
    done

    echo -e "$color$1${colors["resetColor"]}"
}

# Prints forecolor escape sequence
function forecolorEscape () {
    echo "\e[38;5;${1}m"
}

# Prints background escape sequence
function backgroundEscape () {
    echo "\e[48;5;${1}m"
}

function grayscale () {
    local colorCode

    for colorCode in {232..255}; do
        echo -en "$(backgroundEscape $colorCode) $resetColor"
    done

    printf "\n"
}

function grayscaleMotion () {
    local seconds=$((1 * 5))
    local offset=$(exp 255-232 / $seconds)

    while [ $seconds -gt 0 ]; do
        echo -ne $offset
        
        sleep 1
        : $((seconds--))
    done
}