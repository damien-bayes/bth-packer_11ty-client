/**
 * Helper
 *
 * File: /src/shortcodes/helper.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

const dayjs = require("dayjs");

const getCurrentYear = () => {
  return dayjs().year().toString();
};

module.exports = {
  getCurrentYear
};
