/**
 * Project: Bayesian Packer
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 */

const fs = require("fs");
const htmlmin = require("html-minifier");
const terser = require("terser");
const dayjs = require("dayjs");

module.exports = eleventyConfig => {
  /* Enable quiet mode to reduce console noise */
  eleventyConfig.setQuietMode(false);

  /* Watch JavaScript dependencies */
  eleventyConfig.setWatchJavaScriptDependencies(true);

  /* Add scss directory for Eleventy to watch */
  eleventyConfig.addWatchTarget("src/styles/");

  /* Add filter for coverting UTC datetime to readable one */
  eleventyConfig.addFilter("convertToReadableDate", date => {
    return dayjs(date).format("YYYY-MM-DD");
  });

  /* Add filter for minifying javascript using terser */
  eleventyConfig.addFilter('minifyJs', code => {
    const minified = terser.minify(code);

    if (minified.error) {
      console.warn('Terser error has been occurred', minified.error);
      return code;
    }

    return minified.code;
  })

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
    
  /* NOTE: Using this feature, will likely speed up your build process */
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.css": "styles/baythium-aspectus.min.css",
    "node_modules/@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.js": "js/baythium-aspectus.min.js"
  });
};
