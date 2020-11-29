/**
 * Stargazer
 *
 * File: /src/js/modules/stargazer.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

/*******************/
/* PROJECT IMPORTS */
/*******************/

import {applyThousandSeparator} from './utils/strings.js';
import {isValidUrl} from './utils/urls.js';
import {getValuesFromAttrs} from './utils/dom.js';
import {logToConsole} from './utils/console.js'

/*****************************************************************************/

/**
 * @constructor
 * 
 * @param {*} element 
 * @param {object} options 
 */
export const Stargazer = function(element, options) {
  this.element = element;
  this.options = options;
}

/**
 * 
 */
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
   * Extracts repository stars
   * URL example: https://api.github.com/repos/{username}/{repository-name}
   * 
   * @param {*} url
   * 
   * @return {number}
   */
  getStars: async function() {
    const
      {username, repository} = getValuesFromAttrs(
        this.element,
        ["username", "repository"],
        'data-stargazer'
      ),

      url = `https://api.github.com/repos/${username}/${repository}`;

    if (isValidUrl(url) === false) {
      return 0;
    }

    const stars = await fetch(url)
    .then(response => response.json())
    .then(data => {
      /* Check for any errors coming from github api */
      if (data.message) { logToConsole(data.message, 'error'); }

      return data.stargazers_count || 0;
    })
    .catch(err => {
      logToConsole(err, 'error');
    });

    this.update(stars);
  },

  /**
   * 
   * @param {*} stars 
   */
  update: function(stars) {
    this.element.innerText = applyThousandSeparator(stars);

    /* Remove all classes from parent element with JavaScript enabled */
    const parent = this.element.parentElement;

    if (!parent) { return; }

    parent.classList.remove(...parent.classList);
  }
}

/***********/
/* EXPORTS */
/***********/

export default Stargazer;