/**
 * Utils: URLs
 *
 * File: /src/js/modules/utils/urls.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/**
 * Checks url validity
 * @param {string} url
 * 
 * @return {boolean}
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  }
  catch(_) { return false; }
};

/***********/
/* EXPORTS */
/***********/

export default {
  isValidUrl,
}