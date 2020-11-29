/**
 * Utils: DOM
 *
 * File: /src/js/modules/utils/dom.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/

import {isArray} from './validators.js';

/*****************************************************************************/

/**
 * Gets attribute values
 *
 * @param {*} attr
 *
 * @example
 * const { username, repository } = getValuesFromAttrs(this.element, ["username", "repository"], 'data-stargazer')
 */
export const getValuesFromAttrs = (el, attrs, prefix = '') => {
  let obj = {};

  if (isArray(attrs)) {
    attrs.forEach(attr => {
      obj[attr] = el.getAttribute(`${prefix}-${attr}`);
    });
  }

  return obj;
};

/***********/
/* EXPORTS */
/***********/

export default {
  getValuesFromAttrs,
}