/**
 * HTML Meta
 * 
 * Project: Baythium Packer
 * File: /src/shortcodes/html_meta.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const setCanonical = url => {
  return `<link rel="canonical" href="${url}"/>`;
};

const setTitle = title => {
  return `<title>${title}</title>`;
};

const setDescription = description => {
  return `<meta name="description" content="${description}"/>`;
};

const setAuthor = authorUrl => {
  return `<link rel="author" href="${authorUrl}"/>`;
}

module.exports = {
  setCanonical,
  setTitle,
  setDescription,
  setAuthor
};
