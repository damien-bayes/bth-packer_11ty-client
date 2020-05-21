"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const gitlog = require("gitlog").default;

/* ************************************************************************* */

module.exports = ({filePath}) => {
  /* First you must remove "./" from filePath. This leaves you with the format "posts/2020/file.md" */
  const relativePath = filePath.slice(2);
  // const repoLocation = path.resolve(process.cwd()) + "\\";

  /* Limit logs to 20, only fetch commit message and date */
  const options = {
    repo: __dirname,
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
}