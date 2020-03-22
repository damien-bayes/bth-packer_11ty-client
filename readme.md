# Bayesian Packer - Client

<b>Resource:</b> https://packer.bayesianflow.space<br/>
<b>Dedicated port number:</b> 10033<br/>
<b>Initial author:</b> Damien Bayes<br/>
<b>Description:</b> Archive your large-scale infrastructure more secure and effectively using our command-line tool and keep control of organization data<br/>

---

## Getting Started

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

```bash
sudo ./archiver.sh -s <your-source-path> -d <your-destination-path>
```

### Powershell

...

---

## Development

```bash
# Install Eleventy
npm install -g @11ty/eleventy
```

### Docker

```bash
# Build a new docker image using the Dockerfile
sudo docker build \
-t \
bayesian-ecosystem/bayesian-packer_client:1.3 .

sudo docker run \
-d \
--name bayesian-packer_client \
--expose 10033 \
--net bayesian-network-1 \
-e VIRTUAL_HOST=packer.bayesianflow.space \
bayesian-ecosystem/bayesian-packer_client:1.3
```

---
## Contribution

Thanks for contributing to Bayesian Packer. Without you and the Open Source community this project wouldn't be possible. Before you get started, please familiarize yourself with the project and its standards.

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/bayesian-packer/issues

The reports make it easy for the Bayesian Ecosystem team to identify the bug, solve it, and release a new version of the Bayesian Packer by seeing the stacktrace.

## References
1. https://stedolan.github.io/jq
2. https://www.webstoemp.com/blog/multilingual-sites-eleventy
3. https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files
4. https://www.11ty.dev/docs/config/#transforms
5. https://www.hawksworx.com/blog/keeping-sass-simple-and-speedy-on-eleventy
6. https://www.11ty.dev/docs
7. https://www.11ty.dev/docs/data-template-dir
8. https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/
9. https://dev.to/omarhashimoto/create-a-blog-in-less-than-20-lines-of-code-using-11ty-3oh0
10. https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
11. https://www.11ty.dev/docs/quicktips/inline-js/