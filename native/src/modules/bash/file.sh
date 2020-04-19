#!/bin/bash

#####################################
# Name: file.sh
# Author: Damien Bayes <damien.bayes.db@gmail.com>
# Description: None
#####################################

# Checking if a file exists
function isFileExisting () {
	if [ -e "$1" ]; then
        return 0
	else
		return 1
	fi

	: '
	if [[ -f "$1" ]]; then
		return 0
	else
		return 1
	fi
	'

    # (ls $1 >> /dev/null 2>&1 && return 1) || return 0
}

function checkFileExtension () {
    # Extract a file extension from the filename
    local fileExtension=(`echo $1 | awk -F . '{ print $NF }'`)

    # File extension that must be expected
    local expectedExtension=$2

    # Make sure that extension is correct
    if [[ "$fileExtension" == "${expectedExtension}" ]]; then
        return 0
    else
        return 1
    fi
}

# Displays useful information about a file
function getFileDetails () {
	echo $( stat $1 )
}


function isFileExecutable () {
	if [ -x $1 ]; then
		return 0
	else
		return 1
	fi
}

function isFileReadable () {
	if [ -r $1 ]; then
		return 0
	else
		return 1
	fi
}

function isFileWriteable () {
	if [ -w $1 ]; then
		return 0
	else
		return 1
	fi
}

# File encrypting
function encryptFile () {
	# openssl enc -aes-256-cbc -in /etc/services -out enc_services.dat
	# The -in option is used for encryption
	# The -out option instructed OpenSSL to store the file
	openssl enc -aes-256-cbc -in $1 -out $2.dat
}

# File decrypting
function decrypt () {
	# openssl enc -aes-256-cbc -d -in enc_services.dat > services.txt
	# The -d option is used for decryption
	openssl enc -aes-256-cbc -d -in $1.dat > $2
}

function writeIntoFile () {
	echo $1 >> $2
}