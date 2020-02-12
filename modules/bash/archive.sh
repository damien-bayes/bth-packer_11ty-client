#!/bin/bash

#####################################
# Name: archive.sh
# Description: Automates routine actions and operations with zip files
# Initial author: Damien Bayes <damien.bayes.db@gmail.com>
#
# Windows: WinRAR, 7-Zip
# Linux: 7-Zip, PeaZip
# Mac: Zipeg, iZip, UnRarX
#
# References:
# 1. https://askubuntu.com/questions/28476/how-do-i-zip-up-a-folder-but-exclude-the-git-subfolder
#####################################

# By using the zip compression tool, files are compressed individually
# Zip compresses the files individually and then collects them in a single file
function archiveUsingZip () {
    echo $1

    # The -r option includes all the files in the source directory recursively
    sudo zip -r $1
}

#function createZipFile () {
    # The -c option creates an archive
#}

#function extractZipFile () {
    # The -x option extracts an archive
#}

# BZip2 is used to compress the files and folder at the same time. Just issue the command in the
# terminal and the files will be compressed. After the compression, the compressed file will get the 
# extension .bz2
#function archiveUsingBZip2 () {

#}

# A tar file is a collection of different files and directories, which combines them into one file.
# Tar is used for creating backups and archives.
#function archiveUsingTar () {
    # tar -cvf <filename>.tar <source-directory> <destination-directory>
#}