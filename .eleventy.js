const sass = require("./config/sass-processing");
const Nunjucks = require("nunjucks");

module.exports = config => {
  //Watching for modificaions in style directory
  sass('./src/app/styles/bayesian-aspectus.scss', './dist/styles/bayesian-aspectus.css');

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("_includes")
  );

  config.setLibrary("njk", nunjucksEnvironment);

  return {
    dir: {
      input: "src/app",
      output: "dist",
      includes: ""
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  }
}