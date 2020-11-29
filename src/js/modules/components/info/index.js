/**
 * Component: Info
 *
 * File: /src/js/modules/components/info/index.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/* ********* */
/* CONSTANTS */
/* ********* */
const
  tagName = "bth-info",
  template = document.createElement("template");

template.innerHTML = `
  <span>Custom Component</span>
  <slot></slot>
`;

class Info extends HTMLElement {
  /* List of attributes observed for attributeChangedCallback */
  static get observedAttributes() {
    return [];
  }

  /* Fires when an instance of the element is created */
  constructor() {
    /* Call the super constructor first */
    super();

    // Take attribute content and put it inside the info span
    const title = this.getAttribute("title");

    /* Attach a shadow root to the element */
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /* Fires when an instance was inserted into the document */
  connectedCallback() {}

  /* Fires when an instance was removed from the document */
  disconnectedCallback() {}

  /* Fires when an attribute was added, removed, or updated */
  attributeChangedCallback(attrName, oldVal, newVal) {}

  /* Fires when an element is moved to a new document */
  adoptedCallback() {}
}

export {
  tagName,
  Info
};