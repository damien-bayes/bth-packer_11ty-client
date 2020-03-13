#!/bin/bash

# Name: validateJson
# Description: Simple check for json schema validation
#
# WARNING: This solution isn't flexible as expected cos both null and false are valid json as well
#
# @param {string} - json string
#
# @return {boolean}
function validateJson () {
    local result=`cat $filename | jq -e .`

    # 1 - stdout; 2 - stderr
    if $result > /dev/null 2>&1; then
        return 1
    fi

    return 0
}