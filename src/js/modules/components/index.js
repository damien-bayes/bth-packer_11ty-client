/**
 * Components
 *
 * File: /src/js/modules/components/index.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
import { tagName as infoTagName, Info } from "./info/index.js";

/* ************************************************************************* */

if ("customElements" in window) {
  const register = () => window.customElements.define(infoTagName, Info);
  window.WebComponents ? window.WebComponents.waitFor(register) : register();
}