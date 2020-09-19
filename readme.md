# Baythium Packer - Client

Effectively archive your large-scale infrastructure data using our powerful and lightweight command-line tool  

> **Resource:** https://packer.baythium.com  
> **Port Number:** 10033  
> **Organization:** Baythium Ecosystem  

---

## Status

![GitHub](https://img.shields.io/github/license/damien-bayes/baythium-packer_client?color=blueviolet&label=License&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/damien-bayes/baythium-packer_client?color=blueviolet&label=Version&style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/damien-bayes/baythium-packer_client?color=blueviolet&label=GitHub%20Stars&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/damien-bayes/baythium-packer_client?color=blueviolet&label=Issues&style=flat-square)
![Website](https://img.shields.io/website?down_color=red&label=Website&style=flat-square&up_color=blueviolet&url=https%3A%2F%2Fpacker.baythium.com%2F)
![GitHub last commit](https://img.shields.io/github/last-commit/damien-bayes/baythium-packer_client?color=blueviolet&label=Last%20Commit&style=flat-square)

## Getting Started

```bash
# Install all project dependencies
npm install

# Run an eleventy web server on 127.0.0.1:10033 for testing it out
npm run 11ty:serve

npm run 11ty:serve-prod
npm run 11ty:serve-dev

# Build a project for production
npm run eleventy:build

# Run eleventy in the debug mode
npm run eleventy:debug

# Check all javascript files on syntax requirements under the project standards
npm run eslint
```

***NOTE:*** To run Eleventy with experimental features, we’re using the ELEVENTY_EXPERIMENTAL=true environment variable.

---

## CI/CD

We use github actions, which allow for the creation of ci/cd pipelines directly within github. This will check and deploy the source code that is hosted in the current github repository.

## Wiki

```bash
# Clone the wiki to your local machine
# git cline https://github.com/baythium/baythium-packer_client.wiki.git
git clone https://github.com/damien-bayes/baythium-packer_client.wiki.git
```

---

## Contribution

Thanks for contributing to the project. Without you and the open source community this project would NOT be possible. Before you get started, please familiarize yourself with the project and its demanding standards.

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/baythium-packer_client/issues and we will try to fix it as soon as possible in accordance with the priorities.

The reports make it easy for the Baythium team to handle errors, identify bugs, solve it, and release a new version of the Baythium Packer by seeing the stacktrace.

## References

The list of references used to improve the project planning and its functionalities.

1. https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion
2. https://css-tricks.com/prefetching-preloading-prebrowsing
3. https://www.reliablesoft.net/noreferrer-noopener
4. https://alligator.io/html/preload-prefetch
5. https://www.webpagetest.org
6. https://24ways.org/2018/dynamic-social-sharing-images/
7. https://statickit.com/guides/eleventy-webpack

###### Assessment Tools
1. https://developers.google.com/speed/pagespeed/insights
2. https://search.google.com/test/mobile-friendly
