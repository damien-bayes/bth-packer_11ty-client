# Baythium Packer - Client

> **Resource:** https://packer.baythium.com  
> **Dedicated Port Number:** 10033  
> **Initial Author:** Damien Bayes  
> **Description:** Effectively archive your large-scale infrastructure data using our powerful and lightweight command-line tool

---

## Getting Started

```bash
# Automatically run an Eleventy web server on 127.0.0.1:10033 for testing it out
npm run eleventy:serve-1
npm run eleventy:serve-2

# Build a project for production
npm run eleventy:build

# Run Eleventy in debug mode
npm run eleventy:debug

# Check all javascript files on syntax requirements under the Baythium ecosystem standards
npm run eslint
```

---

### Development

```bash
# Install Eleventy (Static site generator)
npm install -g @11ty/eleventy

# Update Baythium packages from the repositories (Optional)
npm update @damien-bayes/baythium-aspectus_package --save
npm update @damien-bayes/baythium-vector_package --save
npm update @damien-bayes/baythium-alacritas_package --save
```

#### Docker - Containerization

Docker plays an essential part on the Baythium Ecosystem and if you are familiar with it you CAN use the following commands for getting the ball rolling.

###### Variant 1

```bash
# NOT RECOMMENDED: docker rm -f baythium-packer_client
sudo docker rm baythium-packer_client && sudo docker stop baythium-packer_client

# Build a new docker image using the Dockerfile
timestamp=$(date +%s)

sudo docker build . \
--file dockerfile \
--tag baythium-ecosystem/baythium-packer_client:1.0.15-$timestamp

sudo docker images
 
# Run an isolated container using the specified options
sudo docker run \
-d \
--name baythium-packer_client \
--expose 10033 \
--net baythium-network-1 \
-e "VIRTUAL_HOST=packer.baythium.com, packer.bayesianflow.space" \
--restart=on-failure:3 \
baythium-ecosystem/baythium-packer_client:1.0.15-$timestamp
```

##### Gulp - Task Runner

```bash
npm install -g gulp-cli && gulp -v
```

##### CI/CD (In the process)

We use GitHub Actions, which allow for the creation of CI/CD pipelines directly within GitHub. This will check and deploy the source code that is hosted in the current GitHub repository.

---

## Contribution

Thanks for contributing to the Baythium Packer. Without you and the open source community this project would NOT be possible. Before you get started, please familiarize yourself with the project and its demanding standards.

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/baythium-packer/issues and we will try to fix it as soon as possible in accordance with the priorities.

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