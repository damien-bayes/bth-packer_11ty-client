/**
 * HTML Meta
 * 
 * Project: Baythium Packer
 * File: /src/shortcodes/helper.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const dayjs = require("dayjs");

const getCurrentYear = () => {
  return dayjs().year().toString();
};

module.exports = {
  getCurrentYear
};
