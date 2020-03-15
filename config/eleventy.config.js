// const fs = require("fs");
const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {
  /* Enable quiet mode to reduce console noise */
  eleventyConfig.setQuietMode(false);

  /* Watch JavaScript dependencies */
  eleventyConfig.setWatchJavaScriptDependencies(true);

  /* Add scss directory for Eleventy to watch */
  eleventyConfig.addWatchTarget("src/styles/");

  /*
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) => {
        const content404 = fs.readFileSync("./src/page-not-found.njk");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content404);
          res.end();
        });
      },
    }
  });*/

  /* Minify HTML output */
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if(outputPath.endsWith(".html")) {
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
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
    
  // eleventyConfig.addPassthroughCopy("src/styles");
}