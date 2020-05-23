"use strict";

import PopupInfo from "./popup-info/index.js"

window.customElements.define("x-foo-shadowdom", PopupInfo);

console.log(window.customElements.get("x-foo-shadowdom"))