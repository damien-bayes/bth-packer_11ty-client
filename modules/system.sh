#!/bin/bash

#####################################
# Name: system.sh
# Author: Damien Bayes <damien.bayes.db@gmail.com>
# Description: None
#
# Warning: Bash scripts are easily human readable, which is a feature of the language by design. 
# Readability is a desirable attribute for most applications, but not so for penetration testing. 
# In most cases, you do not want your target to be able to easily read or reverse engineer your 
# tools when performing offensive operations. To counter that, you can use obfuscation.
#
# Obfuscation is a suite of techniques used to make something purposely difficult to read or understand. 
# There are three main methods for obfuscating scripts:
# - Obfuscate the syntax
# - Obfuscate the logic
# - Encode or encrypt
#
# Obfuscating the syntax of a script aims to purposely make it difficult to read—in other words, make it look ugly.
#####################################

# Importing necessary functions
function printSystemStatus () {
    echo "CPU in use: $(top -bn1 | grep Cpu | awk '{print $2}')"
    echo "Memory in use: $(free -h | grep Mem | awk '{print $3}')"
    echo "Disk space available on /: $(df -k / | grep / | awk '{print $4}')"
}

# Draws a line across the entire width of the terminal
function drawLine () {
	printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
}

function isUserExisiting () {
    local user="$1"

    grep -q "^${u}" $PASSWD_FILE && return 0 || return 1
}

function getRandomUUID () {
  local uuid=$( cat /proc/sys/kernel/random/uuid )

  echo $uuid

  # Getting a time based uuid
  #echo uuidgen -t

  # Getting a random based uuid
  # uuidgen -r
}

function getCurrentDate () {
  # Getting day-month-year from date
  #
  # Date command is most commonly used to create timestamps, particularly when
  # logging events that have happened
  local date=`date +%d%m%Y`

  echo $date
}

# Checks a command for existance
#
# @param {String} command
# @param {String} option
#
# @return {Boolean}
function isCommandExisting () {
  if $1 $2 >/dev/null 2>&1; then
		return 0
  else
    return 1
	fi

  # hash "${1}" 2>/dev/null
}

function checkForYesOrNo () {
  while true; do
    read -p "$1" yn
      case $yn in
      [Yy]* )
        return 0
      ;;
      [Nn]* )
        return 1
      ;;
      * ) echo "$2" ;;
    esac
  done

  : '
  read -p "$1" reply

  # Take an answer of either <yes> or <no>
  if [[ ${reply} = 'y' || ${reply} = 'yes' ]]; then
    return 0
  else
    return 1
  fi
  '

  : '
  dialog --yesno "$1" 0 0
  a=$?
  
  if [ ${a} == '0' ]; then
    return 0
  else
    return 1
  fi
  '
}

function displayCalendarDialog () {
  # Let's ask for a date to be selected
  dialog --calendar "Select a date... " 0 0 1 1 2019
  echo $?
}

# Displays checklist
function displayChecklist () {
  dialog --stdout --checklist "Enable the account options you want:" 10 40 3 \
    1 "Home directory" on \
    2 "Signature file" off \
    3 "Simple password" off
}

# Gathers general system information and dumps it to a file
# Note: Log files for a UNIX system are normally stored in the /var/log/ directory
#
# UNIX log files
# /var/log/apache2/ - Access and error logs for the Apache web server
# /var/log/auth.log - Information on user logins, privileged access, and remote authentication
# /var/log/kern.log - Kernel logs
# /var/log/messages - General noncritical system information
# /var/log/syslog - General system logs
#
# To find more information on where logfiles are being stored for a given system, 
# refer to /etc/syslog.conf or /etc/rsyslog.conf on most UNIX distributions.
#
# @return void
function gatherUnixLogFiles () {
  local date=$(getCurrentDate)
  local directory=$1

  isDirectoryExisting $directory
  if [ $? = 0 ] ; then
    # The option -c is used to create an archive file,
    # -z to zip the file, and -f to specify a name for the output file
    #
    # The HOSTNAME variable is a bash variable that is automatically set by the shell to the name
    # of the current host
    tar -czf $directory/${HOSTNAME}-${date}-logs.tar.gz /var/log
  fi
}

function getOSType () {
  case "$OSTYPE" in
    solaris*) echo "solaris" ;;
    darwin*)  echo "osx" ;;
    linux*)   echo "linux" ;;
    bsd*)     echo "bsd" ;;
    msys*)    echo "windows" ;;
    *)        echo "unknown: $OSTYPE" ;;
  esac
}

# Dynamically concatenate a shell command with an argument and execute the result in the shell
# by using the eval command
function evaluateCommand () {
  eval "$1 $2"
}

function getUnixInformation () {
  echo uname -a
}

function funcExists () {
  [ "$(type -t "${1}")" -eq 'function' ]
}

function createUser () {
  declare -a surname
  declare -a name
  declare -a username
  declare -a department
  declare -a password

  while IFS=, read -r COL1 COL2 COL3 COL4 COL5 TRASH; 
  do
    SURNAME+=("$COL1")    
    NAME+=("$COL2")    
    USERNAME+=("$COL3")    
    DEPARTMENT+=("$COL4")    
    PASSWORD+=("$COL5")
  done <"$MY_INPUT"
  
  for index in "${!USERNAME[@]}"; 
  do    
    useradd -g "${DEPARTMENT[$index]}" -d "/home/${USERNAME[$index]}" -s /bin/bash -p "$(echo "${PASSWORD[$index]}" | openssl passwd -1 -stdin)" "${USERNAME[$index]}"
  done
}

function emptyRecycleBin () {
  local destination="${HOME}/.local/share/Trash/*"

  sudo rm -rf $destination
}