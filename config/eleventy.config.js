/**
 * Eleventy Configuration
 *
 * File: /config/eleventy.config.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

const
  fs = require("fs"),
  htmlmin = require("html-minifier"),
  terser = require("terser"),
  dayjs = require("dayjs"),
  path = require("path");

const { getCurrentYear } = require("../src/shortcodes/helper");
const gitlog = require("gitlog").default;

module.exports = eleventyConfig => {
  /* Enable quiet mode to reduce console noise */
  eleventyConfig.setQuietMode(false);

  /* Watch JavaScript dependencies */
  eleventyConfig.setWatchJavaScriptDependencies(true);

  /* Add scss directory for Eleventy to watch */
  eleventyConfig.addWatchTarget("src/styles/");

  /* Configure Browsersync to do the 404 routing */
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content404 = fs.readFileSync("dist/exceptions/404/index.html");

        browserSync.addMiddleware("*", (req, res) => {
          /* Provide the 404 content without redirect */
          res.write(content404);

          /* Add 404 http status code in request header */
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end();
        });
      },
    }
  });

  /* LAYOUT ALIASES */

  // eleventyConfig.addLayoutAlias("base", "src/_includes/_layouts/base.njk");
  // eleventyConfig.addLayoutAlias("secondary", "src/_includes/_layouts/secondary.njk");

  /* TRANSFORMS */

  /* Add transformation for minifying HTML output */
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    
      return minified;
    }
    
    return content;
  });

  /* PASSTHROUGH */
    
  /* NOTE: Using this feature, will likely speed up your build process */
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.css": "styles/baythium-aspectus.min.css",
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.js": "js/baythium-aspectus.min.js",

    "node_modules/@damien-bayes/baythium-vector_package/dist/baythium-vector.css": "styles/baythium-vector.min.css",
    "node_modules/@damien-bayes/baythium-vector_package/dist/fonts/fontawesome": "fonts/fontawesome"
  });

  eleventyConfig.addPassthroughCopy({
    "src/js/baythium-stargazer.js": "js/baythium-stargazer.js"
  })

  /* SHORTCODES */
  eleventyConfig.addNunjucksShortcode("currentYear", getCurrentYear);

  /**
   * Setting up the changelog shortcode
   * 
   * @see: https://timothymiller.dev/posts/2020/adding-a-changelog-to-my-11ty-blog/
   */
  eleventyConfig.addNunjucksShortcode("changelog", ({filePath}) => {
    /* First you must remove "./" from filePath. This leaves you with the format "posts/2020/file.md" */
    const relativePath = filePath.slice(2);
    const repoLocation = path.resolve(process.cwd()) + "\\";

    /* Limit logs to 20, only fetch commit message and date */
    const options = {
      repo: repoLocation,
      number: 20,
      fields: ["subject", "authorDate"],
      file: relativePath
    };

    /* Here's where the magic happens! You must pass your params into gitlog, and it handles the rest */
    const commits = gitlog(options);

    let html = "<details><summary>Changelog</summary><ul>";
    for (let i=0; i<commits.length; i++) {
      /* Convert the git date to ISO */
      let isoDate = commits[i].authorDate.slice(0,10);
      /* Convert ISO to readable date e.g. "May 05 2020" */
      let readableDate = DateTime.fromISO(isoDate).toFormat("LLLL dd yyyy");
      html += `<li><time datetime="${isoDate}">${readableDate}</time> ${commits[i].subject}</li>`;
    }
    html += "</ul></details>";
    return html;
  });

  /* FILTERS */

  /* Add filter for coverting UTC datetime to readable one */
  eleventyConfig.addFilter("humanReadableFormat", date => {
    return dayjs(date).format("MMMM D YYYY");
  });

  /* Add filter for minifying javascript using terser */
  eleventyConfig.addFilter("minifyJs", code => {
    const minified = terser.minify(code);

    if (minified.error) {
      console.warn("Terser error has been occurred", minified.error);

      return code;
    }

    return minified.code;
  });

  /* PLUGINS */

  /* CUSTOM COLLECTIONS */
};
