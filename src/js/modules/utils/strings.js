/**
 * Utils: Strings
 *
 * File: /src/js/modules/utils/strings.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/**
 * @param {*} n
 * 
 * @see: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
 */
export const applyThousandSeparator = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/***********/
/* EXPORTS */
/***********/

export default {
  applyThousandSeparator,
}