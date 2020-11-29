/**
 * Share
 *
 * File: /src/js/share.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 *
 * References:
 * 1. https://css-tricks.com/how-to-use-the-web-share-api
 */

'use strict';

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
import Share from "./modules/share.js";

/* Dynamically import the module using ES2020 features */
// let module = await import('/modules/stargazer.js');

/* ************************************************************************* */

((w, _) => {
  "use strict";

  w.addEventListener("DOMContentLoaded", _ => {
    Share.inititialize();
  });
})(window, document);