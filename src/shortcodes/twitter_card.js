/**
 * Twitter Card
 *
 * File: /src/shortcodes/twitter_card.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
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