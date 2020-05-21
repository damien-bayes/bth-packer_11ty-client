"use strict";

/* ******************* */
/* THIRD-PARTY IMPORTS */
/* ******************* */
const dayjs = require("dayjs");

const convertToHumanReadableFormat = utcDateTime => {
  return dayjs(utcDateTime).format("MMMM D YYYY");
}

module.exports = {
  convertToHumanReadableFormat
}