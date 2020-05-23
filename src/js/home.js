/**
 * Home
 *
 * File: /src/js/home.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
import Stargazer from "./modules/stargazer.js";

/* ************************************************************************* */

(function(w, d) {
  "use strict";

  w.addEventListener("DOMContentLoaded", e => {
    Stargazer.inititialize();
  });
})(window, document);