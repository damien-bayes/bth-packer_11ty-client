/**
 * Utils: Console
 *
 * File: /src/js/modules/utils/console.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/
import constants from '../constants/index.js';

/*****************************************************************************/

/**
 * @returns {void}
 */
export const baseWarn = (msg) => {
  console.error(`${constants.projectName}: ${msg}`)
}

/**
 * @returns {void}
 */
export const logToConsole = (message, type, isSupressed = false) => {
  let console = window.console;

  if (!isSupressed && typeof(console) != "undefined" && console.log) {
    console[type || "log"](`${constants.projectName}: ${message}`);
  }
}

/***********/
/* EXPORTS */
/***********/

export default {
  baseWarn,
  logToConsole,
}