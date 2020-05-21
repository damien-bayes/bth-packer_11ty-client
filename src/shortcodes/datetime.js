"use strict";

const dayjs = require("dayjs");

const getCurrentYear = () => {
  return dayjs().year().toString();
};

module.exports = {
  getCurrentYear
}