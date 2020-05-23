"use strict";

/*
 * NOTE: Template elements allow you to define regions within your HTML, which will not be rendered by the browser.
 * You can then instantiate these document fragments with JavaScript and then place the resulting DOM within your document.
 */
let tmpl = document.createElement("template");
tmpl.innerHTML = `
  <template>
    <div>Custom element shadow tree content</div>
    <slot></slot>
  </template>
`;

class PopupInfo extends HTMLElement {
  constructor() {
    /* Call the super constructor first */
    super();

    /* Attach a shadow root to the element */
    let shadowRoot = this.attachShadow({
      mode: "open"
    });

    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

export default PopupInfo;