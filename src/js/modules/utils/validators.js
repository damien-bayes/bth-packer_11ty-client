/**
 * Utils: Validators
 *
 * File: /src/js/modules/utils/validators.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/**
 * 
 * @param {*} value
 * @returns {boolean}
 */
/* VARIANT 1 */
// export const isArray = value => Array.isArray(value);

/* VARIANT 2 */
export const isArray = value => {
  return toString.call(value) === '[object Array]';
};

/***********/
/* EXPORTS */
/***********/

export default {
  isArray,
}