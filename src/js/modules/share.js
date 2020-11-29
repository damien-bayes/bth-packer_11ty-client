/**
 * Share
 *
 * File: /src/js/modules/share.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 * 
 * References:
 * 1. https://css-tricks.com/how-to-use-the-web-share-api
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/

import {logToConsole} from './utils/console.js';

/*****************************************************************************/

/**
 * @constructor
 * 
 * @param {*} element 
 * @param {object} options 
 */
export const Share = function(element, options) {
  this.element = element;
  this.options = options;

  if (navigator.share) {
    this.element.classList.remove('display--none');
    this.element.addEventListener('click', this.clickHandler);
  }
}

/**
 * 
 */
Share.inititialize = () => {
  const
    elements = document.querySelectorAll("[data-share]"),
    length = elements.length;

  if (elements) {
    for (let i = 0; i < length; i++) {
      new Share(elements[i], {});
    }
  }
}

Share.prototype = {
  constructor: Share,

  /**
   * 
   * @param {*} e
   * 
   * @return {void}
   */
  clickHandler: function(e) {
    /*
     * Check if the Web Share API is supported on the user's browser
     *
     * NOTE: It's only available for Chrome for Android, and Safari (desktop and iOS)
     * @see: https://w3c.github.io/web-share/
     */
    if (navigator.share) {
      const
        title = document.title.split('-')[0].trim(),
        url = window.location.href;

      navigator.share({
        title: title,
        url: url,
      }).then(() => {
        logToConsole('Thanks for sharing', 'log');
      })
      .catch(error => logToConsole(err, error));
    }
    /* Fallback */
    else {}
  }
}

/***********/
/* EXPORTS */
/***********/

export default Share;
