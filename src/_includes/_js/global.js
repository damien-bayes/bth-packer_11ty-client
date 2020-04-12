/**
 * Global
 * 
 * Project: Baythium Packer
 * File: /src/_includes/_js/global.js
 * Initial author: Damien Bayes <damien.bayes.db@gmail.com>
 */

"use strict";

const stargazer = {
  /**
   * Checks url validity
   * @param {string} url
   * 
   * @return {boolean}
   */
  isValidUrl: function(url) {
    const pattern = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

    return pattern.test(url);
  },

  /**
   * Extracts repository stars
   * URL example: https://api.github.com/repos/{username}/{repository-name}
   * 
   * @param {*} url
   * 
   * @return {number}
   */
  get: function(url) {
    if (this.isValidUrl(url) === false) {
      return 0;
    }

    const headers = {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    };

    return fetch(url, headers)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      return data.stargazers_count;
    });
  } 
}

window.addEventListener("DOMContentLoaded", e => {
  /* Initialize Google Analytics */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  gtag("js", new Date());
  gtag("config", "UA-163071822-1");
  
  const stars = stargazer.get("https://api.github.com/repos/damien-bayes/baythium-packer_client");
  stars.then(response => {
    document.getElementById("starsCount").innerText = response;
  });
});