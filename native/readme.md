# Baythium Packer CLI

> **Initial Author:** Damien Bayes  
> **Description:** Effectively archive your large-scale infrastructure data using our powerful and lightweight command-line tool  

---

## Getting Started

### Development

###### Bash

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

```bash
sudo ./archiver.sh -s <your-source-path> -d <your-destination-path>
```

###### Powershell

Description will be here shortly

---

## Contribution

Thanks for contributing to the Baythium Packer. Without you and the open source community this project would NOT be possible. Before you get started, please familiarize yourself with the project and its demanding standards.

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/baythium-packer/issues and we will try to fix it as soon as possible in accordance with the priorities.

The reports make it easy for the Baythium team to handle errors, identify bugs, solve it, and release a new version of the Baythium Packer by seeing the stacktrace.

## References
1. https://stedolan.github.io/jq
2. https://www.dcode.fr/acronym-generator