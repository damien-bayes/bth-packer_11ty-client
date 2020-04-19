#!/bin/bash

#####################################
# Name: security.sh
# Author: Damien Bayes <damien.bayes.db@gmail.com>
# Contributors: None
# Version: 1.0.0
# Description: None
#####################################

generate () {
	local password=$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c20)
  
	return password
}

# Determine if a current user has root privileges
checkForRoot () {
  if [[ $EUID -ne 0 ]]; then
    return 1
  fi

  return 0
  

  : '
  if [ "(id -g)" != '0' ]; then
    return 1
  else
    return 0
  fi
  '
}

setFullPermissions () {
  sudo chmod 777 -R $1 
}

createSSHKey () {
  sudo ssh-keygen
}

# Copy the SSH public key to the remote host
#
# @argument {$1} - Remote host name
copySSHKeyTo () {
  ssh-copy-id $1
}

# Log in to the remote host
#
# #argument {$1} - Remote host name
loginUsingSSH () {
  ssh $1
}