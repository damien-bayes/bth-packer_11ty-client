/**
 * Stargazer
 *
 * File: /src/js/stargazer.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

"use strict";

const Stargazer = {
  /**
   * Checks url validity
   * @param {string} url
   * 
   * @return {boolean}
   */
  isValidUrl: function(url) {
    try {
      new URL(url);
      return true;
    }
    catch(_) { return false; }
  },

  /**
   * Extracts repository stars
   * URL example: https://api.github.com/repos/{username}/{repository-name}
   * 
   * @param {*} url
   * 
   * @return {number}
   */
  get: async function(url) {
    if (this.isValidUrl(url) === false) {
      return 0;
    }

    const headers = {
      method: "GET",
      /* Mode: no-cors, *cors, same-origin */
      mode: "no-cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    };

    return await fetch(url)
    .then(response => { return response.json(); })
    .then(data => {
      return data.stargazers_count || 0;
    });
  }
};

Stargazer.getAndInsert = async function(obj, elementId) {
  const stars = await this.get(`https://api.github.com/repos/${obj.username}/${obj.repositoryName}`);

  const element = document.getElementById(elementId);
  if (typeof(element) != "undefined" && element != null) {
    element.innerText = stars;

    /* Remove all classes from parent element with JavaScript enabled */
    const parent = element.parentElement;
    parent.classList.remove(...parent.classList);
  }
};

Stargazer.getAndInsert({username: "damien-bayes", repositoryName: "baythium-packer_client"}, "starsCount");