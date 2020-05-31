# Baythium Packer - Client

Effectively archive your large-scale infrastructure data using our powerful and lightweight command-line tool  

> **Resource:** https://packer.baythium.com  
> **Port Number:** 10033  
> **Organization:** Baythium Ecosystem  

---

## Table of contents

- [Status](#status)
- [Getting Started](#getting-started)
  - [Development](#development)
    - [Docker - Containerization](#docker-containerization)
    - [Gulp - Task Runner](#gulp-task-runner)
    - [Nginx](#nginx)
    - [CI/CD](#ci/cd)
    - [Wiki](#wiki)
- [Contribution](#contribution)
- [Bug Fixes](#bug-fixes)
- [References](#references)

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

---

### Development

```bash
# Install eleventy (static site generator) globally
npm install -g @11ty/eleventy

# Update baythium packages from the repositories (optional)
# npm update @baythium/baythium-aspectus_package --save
# npm update @baythium/baythium-vector_package --save
# npm update @baythium/baythium-alacritas_package --save

npm update @damien-bayes/baythium-aspectus_package --save
npm update @damien-bayes/baythium-vector_package --save
npm update @damien-bayes/baythium-alacritas_package --save
```

#### Docker (Containerization)

Docker plays an essential part on this project and if you are familiar with it you CAN use the following commands for getting the ball rolling.

```bash
# Remove all containers with the specified name
docker rm $(docker stop $(docker ps --filter "name=baythium-packer_client" --format="{{.ID}}"))

# Remove all images with the specified name
docker rmi $(docker images | grep "baythium-packer_client")

timestamp=$(date +%s)

# Build a new docker image using the Dockerfile
docker build . \
--file dockerfile \
--tag baythium-ecosystem/baythium-packer_client:$timestamp

# List all images to check that the required image exists
docker images
 
# Run an isolated container using the specified options
docker run \
-d \
--name baythium-packer_client \
--expose 10033 \
--net baythium-network-d83f1df8 \
--ip 172.18.0.3 \
-e "VIRTUAL_HOST=packer.baythium.com" \
--restart=on-failure:3 \
baythium-ecosystem/baythium-packer_client:$timestamp
```

#### Gulp (Task Runner)

```bash
# Install a task runner with the name gulp
npm install -g gulp-cli && gulp -v
```

#### Nginx

```bash
# Test the nginx configuration file for any errors
nginx -t -c nginx/nginx.default.conf

# Create encrypted password strings
openssl passwd <secret-password>
```

#### CI/CD

We use github actions, which allow for the creation of ci/cd pipelines directly within github. This will check and deploy the source code that is hosted in the current github repository.

#### Wiki

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

1. https://www.webstoemp.com/blog/multilingual-sites-eleventy
2. https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files
3. https://www.11ty.dev/docs/config/#transforms
4. https://www.hawksworx.com/blog/keeping-sass-simple-and-speedy-on-eleventy
5. https://www.11ty.dev/docs
6. https://www.11ty.dev/docs/data-template-dir
7. https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites
8. https://dev.to/omarhashimoto/create-a-blog-in-less-than-20-lines-of-code-using-11ty-3oh0
9. https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy
10. https://www.11ty.dev/docs/quicktips/inline-js
11. https://www.belter.io/eleventy-sitemap
12. https://mozilla.github.io/nunjucks/templating.html
13. https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion
14. https://css-tricks.com/prefetching-preloading-prebrowsing
15. https://www.reliablesoft.net/noreferrer-noopener
16. https://snipcart.com/blog/11ty-javascript-static-site-generator-tutorial
17. https://bryanlrobinson.com/blog/using-eleventys-javascript-data-files
18. https://alligator.io/html/preload-prefetch
19. https://gulpjs.com/plugins 
20. https://www.webpagetest.org
21. https://github.com/marketplace/actions/ssh-remote-commands
22. https://github.community/t5/GitHub-Actions/Installing-npm-packages-from-the-GitHub-package-registry/td-p/30559
23. https://24ways.org/2018/dynamic-social-sharing-images/
24. https://annualbeta.com/blog/dynamic-social-sharing-images-with-eleventy/
25. https://eleventythemes.com/website/learning-resources/