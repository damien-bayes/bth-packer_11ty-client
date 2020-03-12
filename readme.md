# Bayesian Packer

***Resource:*** https://packer.bayesianflow.space  
***Initial author:*** Damien Bayes  
***Description:*** Large-scale and secure folder and file archiver for automating your infrastructure  

---

## How to use

### Bash

First and foremost, you have to install required dependencies which are part of the entire program. Just use subsequent commands in sequence:

```bash
# Get info on an updated version of packages or their dependencies
sudo apt update

# Install zip/unzip utilities
sudo apt install zip unzip

# Install lightweight and flexible command-line JSON processor
sudo apt install jq
```

For instance, the jq is used for processing configuration data along with a basic structure composed of sections, properties, and values. Whereas the zip/unzip utilities are used for working with archives.

### Powershell

---

### Docker

```bash
# Build a new docker image using the Dockerfile
sudo docker build -t bayesian-ecosystem/bayesian-packer_client:1.0 .

sudo docker run \
-d \
--name bayesian-packer_client \
--expose 10033 \
--net bayesian-network-1 \
-e VIRTUAL_HOST=packer.bayesianflow.space \
bayesian-ecosystem/bayesian-packer_client:1.0
```

---

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/bayesian-packer/issues

The reports make it easy for the Bayesian Ecosystem team to identify the bug, solve it, and release a new version of the Bayesian Packer by seeing the stacktrace.

## References
1. https://stedolan.github.io/jq