#!/bin/bash

#####################################
# Project: Baythium Packer
# File: /baythium-packer.sh
# Initial author: Damien Bayes <damien.bayes.db@gmail.com>
#
# Synopsis:
# sudo ./baythium-packer.sh [source, destination, exclusions, filename, group, list-group, group-count, verbose, help]
#
# sudo ./bayesian-packer.sh /
# -s <your-source-path> /
# -d <your-destination-path> /
# -e *<your-exclusion-file>* -e *<your-exclusion-folder>* /
# -f <your-filename> /
# -g <your-group> /
# -lg
# -gc
# -v
# -h
#
# Aliases:
# alias bayesian-archiver='sudo bash "$HOME/projects/bayesian-job-automation/source/actions/bash/archiver.sh" / 
# -f "$HOME/projects/bayesian-job-automation/source/objectives.json"'
#####################################

# Set a current working directory to the script location ()
cd "$(dirname "$0")"

# set -o errexit
# set -o pipefail
# set -o nounset

# Include necessary modules
source "./modules/bash/system.sh"
source "./modules/bash/security.sh"
source "./modules/bash/file.sh"
source "./modules/bash/color.sh"
source "./modules/bash/archive.sh"
source "./modules/bash/jq.sh"

# Make many classes of subtle bugs impossible
# set -euo pipefail
# IFS=$'\n\t'

# Name: archive
# Description: none
#
# @param {boolean} - mode
#
# @return {void}
function archive () {
    local date=$( getCurrentDate )
    local uuid="00000000-0000-0000-0000-000000000000"

    # Destination path
    local d=""

    # Exclusions
    local e=()

    # Time for performance
    local startTime=""
    local endTime=""
    local executionTime=""

    unset exclusions

    if [ "$1" -eq '0' ]; then
        writeColoredString "Start the archiving using the specified source and destination directories..." "greenColor"

        # Delay for illustrative purposes
        sleep .600

        # Generate random UUID
        uuid=$( getRandomUUID )

        # Provide exclusions as an array
        e=($exclusions)
        
        # Build single-lined exclusions
        for i in "${e[@]}" ; do
            exclusions+="--exclude=${i} "
        done

        # Destination file path
        d="${destination}/${date}-${uuid}.zip"

        startTime=$(date +%s.%N)
        archiveUsingZip "${d} ${source} ${exclusions}"
        endTime=$(date +%s.%N)

        # Don't feel bad about using python here cos it's embedded in the most operating systems
        executionTime=$(python -c "print(${endTime} - ${startTime})")

        # chmod -R 777
        setFullPermissions "${d}"

        printCompletion $0 $source $d $executionTime
    else
        writeColoredString "Start the archiving using the specified json file..." "greenColor"

        # Delay for illustrative purposes
        sleep .600

        #for i in "${!array[@]}" ; do
        #    if [[ "$(declare -p ${i})" =~ "declare -a" ]]; then
        #        continue
        #    fi
        #
        #    array[ $i ]=`echo ${array[ $i ]} | sed 's/\"//g'`
        #done

        for i in "${!array[@]}" ; do
            if [ $(( $i % 4 )) -eq '0' ]; then
                # Generate random UUID
                uuid=$( getRandomUUID )

                # Key
                local k="`echo ${array[ $i ]} | sed 's/\"//g'`"

                # Source
                local s="`echo ${array[ $i + 1 ]} | sed 's/\"//g'`"

                # Destination
                d="`echo ${array[ $i + 2 ]} | sed 's/\"//g'`/${date}-${uuid}.zip"

                # Exclusions
                e=${array[ $i + 3 ]}

                local values=`echo "${e}" | jq -c 'values[]'`

                # Build single-lined exclusions
                for value in $values; do
                    exclusions+="--exclude=`echo ${value} | sed 's/\"//g'` "
                done

                startTime=$(date +%s.%N)
                archiveUsingZip "$d $s ${exclusions}"
                endTime=$(date +%s.%N)
                
                executionTime=$(python -c "print(${endTime} - ${startTime})")

                # chmod -R 777
                setFullPermissions "$d"

                printCompletion $k $s $d $executionTime

                # Delay for illustrative purposes only
                sleep .600
            fi
        done
    fi
}

# Name: printCompletion
# Description: Prints completion information
#
# @return {void}
function printCompletion () {
  echo -e "
    Archiving status: `writeColoredString "Done" "greenColor"`
    Name: `writeColoredString "${1}" "greenColor"`
    Source: `writeColoredString "${2}" "greenColor"`
    Destination: `writeColoredString "${3}" "greenColor"`
    Execution time: `writeColoredString "${4}" "greenColor"`
  "
}

# Name: printHelp
# Description: Prints help to become familiar with existing commands
#
# @return {void}
function printHelp () {
    echo -e "
        `writeColoredString $(basename $0) "greenColor"` [ -s ] [ -d ] [ -e ] [ -f ] [ -h ]

        Usage: $(basename $0) `writeColoredString "-s" "greenColor"` <source-directory> `writeColoredString "-d" "greenColor"` <destination-directory> `writeColoredString "-e" "greenColor"` <exclusions> `writeColoredString "-f" "greenColor"` <filename>

        Options:
        `writeColoredString "-s" "greenColor"` (required)       Source directory, or directory that contains most of the source files.
        `writeColoredString "-d" "greenColor"` (required)       Destination directory
        `writeColoredString "-e" "greenColor"` (optional)       Exclusions
        `writeColoredString "-f" "greenColor"` (optional)       Path to a file that is represented as json containing all necessary information about source, destination directories along with exclusions

        Initial author: `writeColoredString "Damien Bayes <damien.bayes.db@gmail.com> | https://github.com/damien-bayes" "greenColor"`
        Do not hesitate to contact me if you require more information about this script.
    "
}

# Name: getEntries
# Description: Gets required entries from the file
#
# @return {void}
function getEntries () {
    # Set global variable
    array=()

    # Delay for illustrative purposes
    #sleep .600

    checkFileExtension $filename "json"

    if [ "$?" -eq '0' ]; then
        validateJson $filename

        if [ "$?" -eq '0' ]; then
            # #####################################
            # Start parsing json file using jq
            # #####################################

            # Get all keys from a file
            local keys=`cat $filename | jq -c 'keys[]'`

            # Start looping
            for key in $keys; do
                # Get entries from the specified key
                local entries=`cat $filename | jq -c ".$key"`

                # Get a source path that is gonna be used as the initial source
                local sourcePath=`echo $entries | jq -c '.["source-path"]'`

                # Get a destination path where the archived file will be placed
                local destinationPath=`echo $entries | jq -c '.["destination-path"]'`

                # Get all exlusions that will be ignored at the time of archiving
                local exclusions=`echo $entries | jq -c '.exclusions'`

                # Push an array into the array
                array+=( $key $sourcePath $destinationPath $exclusions )
            done
        else
            writeColoredString "Json schema is not valid" "redColor"

            # Indicate a general error (1)
            exit 1
        fi
    else
        writeColoredString "Invalid file extension" "redColor"

        # Indicate a general error (1)
        exit 1
    fi
}

# Name: start
# Description: none
#
# @return {void}
function start () {
    local noReply="Please answer yes [y] or no [N]"

    # Check if a specified file exists
    isFileExisting $filename

    # Decision was made to start the archiving specifying a json file
    if [ "$?" -eq '0' ]; then
        echo -e "File name: `writeColoredString ${filename} "greenColor"`"

        checkForYesOrNo "Do you wish to start the archiving using the specified file? [y/N]" "$noReply"

        if [ "$?" -eq '0' ]; then
            # Call function for getting entries from a json file
            getEntries
            archive 1
        else
            # Indicate a general error (1)
            exit 1
        fi
    else
        writeColoredString "File is not found" "redColor"

        echo "Trying to find source and destination directories..."

        # WARNING: Path to source and destination folders must be provided accordingly
        if [[ -d $source && -d $destination ]]; then
            echo -e "Source directory: `writeColoredString "${source}" "greenColor"`"
            echo -e "Destination directory: `writeColoredString "${destination}" "greenColor"`"

            checkForYesOrNo "Do you wish to start archiving using the specified directories? [y/N]" "$noReply"

            if [ "$?" -eq '0' ]; then
                archive 0
            else
                # Indicate a general error (1)
                exit 1
            fi
        else
            writeColoredString "Source and destination directories must exist" "redColor"

            # Indicate a general error (1)
            exit 1
        fi
    fi
}

# Name: initialize
# Description: The initial point of executing
#
# @param {array} - arguments
#
# @return {void}
function initialize () {
    # #####################################
    # Flag concept implementation (-l, --long-version, -v 10, --verbosity=10)
    #
    # NOTE: Flags are effectively a user-friendly way to pass parameters or 
    # arguments to a program at runtime
    # #####################################
    local OPTIND
    
    # The -s and -d options require a parameter, and it's an error condition if one is not supplied
    # The colon (:) indicates a required parameter
    local optstring=":s:d:e:f:h"

    # When no flags or arguments are specified, print out a help message
    [[ "$#" -eq '0' ]] && set -- "-h"

    # Start parsing the flags (Read the options and set stuff)
    while getopts ${optstring} options; do
        case ${options} in
            s) source=$OPTARG ;;
            d) destination=$OPTARG ;;
            e) exclusions+="${OPTARG} " ;;
            f) filename=$OPTARG ;;
            h)
                printHelp

                # Indicate a general error (1)
                exit 1
            ;;
            \?)
                # If a user entered the wrong command, you need to offer a way to 
                # continue his work and finish the task.

                echo -e `writeColoredString "Invalid option: -${OPTARG}." "redColor"`

                # archiver: '${OPTARG}' is not an archiver command. See 'archiver --help'.

                # Indicate a general error (1)
                exit 1
            ;;
        # Close case statement
        esac
    done

    # Remove parsed options and args from $@ list
    shift $((OPTIND-1))

    # WARNING: Check for availability of required packages (zip, jq, sleep, date, chmod)

    start
}

# Let's check that the script is initiated with the root privileges
checkForRoot

if [ "$?" -eq '1' ]; then
  echo -e `writeColoredString "Script <$BASH_SOURCE> must be run with the root privileges." "redColor"`

  # Indicate a general error (1)
  # Exit codes are useful for users who want to wrap your command-line client in a bash script
  exit 1
fi

# $@ is input parameters where $1 - arg1, $2 - arg2 and etc.
initialize $@