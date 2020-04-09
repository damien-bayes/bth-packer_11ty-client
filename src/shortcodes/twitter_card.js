/**
 * Twitter Card
 * 
 * Project: Baythium Packer
 * File: /src/shortcodes/twitter_card.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const setTwitterCard = (site, title, description, image, creator) => {
  let content = '';

  if(image) {
    content += `
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="${image}"/>`;
  } 
    
  content += `<meta name="twitter:card" content="summary"/>`;

  content += `
    <meta name="twitter:site" content="${site}"/>
    <meta name="twitter:title" content="${title}"/>
    <meta name="twitter:description" content="${description}"/>`;

  if(creator) {
    content += `<meta name="twitter:creator" content="${creator}"/>`;
  }

  return content;
}

module.exports = {
  setTwitterCard
};