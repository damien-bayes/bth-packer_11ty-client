/**
 * Stargazer
 *
 * File: /src/js/modules/stargazer.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/**
 * @constructor
 * 
 * @param {*} element 
 * @param {object} options 
 */
const Stargazer = function(element, options) {
  this.element = element;
  this.options = options;
}

Stargazer.inititialize = () => {
  const
    elements = document.querySelectorAll("[data-stargazer]"),
    length = elements.length;

  if (elements) {
    for (let i = 0; i < length; i++) {
      new Stargazer(elements[i], {}).getStars();
    }
  }
}

/* Instance methods */
Stargazer.prototype = {
  constructor: Stargazer,

  /**
   * Gets attribute values
   *
   * @param {*} attr
   */
  getValuesFromAttrs: function(attrs) {
    let obj = {};

    if (Array.isArray(attrs)) {
      attrs.forEach(attr => {
        obj[attr] = this.element.getAttribute(`data-stargazer-${attr}`);
      });
    }

    return obj;
  },

  /**
   * Checks url validity
   * @param {string} url
   * 
   * @return {boolean}
   */
  isValidUrl: function(url) {
    try {
      new URL(url);
      return true;
    }
    catch(_) { return false; }
  },

  /**
   * @param {*} n
   * 
   * @see: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
   */
  applyThousandSeparator: function(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  /**
   * Extracts repository stars
   * URL example: https://api.github.com/repos/{username}/{repository-name}
   * 
   * @param {*} url
   * 
   * @return {number}
   */
  getStars: async function() {
    const
      { username, repository } = this.getValuesFromAttrs(["username", "repository"]),
      url = `https://api.github.com/repos/${username}/${repository}`;

    if (this.isValidUrl(url) === false) {
      return 0;
    }

    const stars = await fetch(url)
    .then(response => { return response.json(); })
    .then(data => {
      return data.stargazers_count || 0;
    })
    .catch(err => console.error(err));

    this.update(stars);
  },

  update: function(stars) {
    this.element.innerText = this.applyThousandSeparator(stars);

    /* Remove all classes from parent element with JavaScript enabled */
    const parent = this.element.parentElement;

    if (!parent) {
      return;
    }
    parent.classList.remove(...parent.classList);
  }
}

export default Stargazer;