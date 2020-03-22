/**
 * Project: Bayesian Packer
 * This project is a part of Bayesian Ecosystem
 * Initial author: Damien Bayes (damien.bayes.db@gmail.com)
 */

"use strict";

module.exports = {
  currentYear: new Date().getFullYear(),
  brandUrl: "images/bayesian-ecosystem-inverted.svg",

  /* English */
  en: {
    /* Deck 1: Language Switcher */
    languageSwitcher: {
      language: "Language"
    },

    /* Deck 4: Copyright */
    copyright: {
      paragraphs: [
        "All product names, trademarks and registered trademarks are property of their respective owners.",
        "Use of these names, trademarks and brands does not imply endorsement"
      ]
    },

    /* Deck 5: Synthesis */
    synthesis: {
      productName: "Product name",
      clientVersion: "Client version"
    }
  },

  /* Russian */
  ru: {
    copyright: {
      paragraphs: [
        "Все торговые марки и логотипы являются зарегистрированными торговыми марками их соответствующих владельцев.",
        "Использование наименований, логотипов и торговых марок не одобряется со стороны их владельцев"
      ]
    },

    synthesis: {
      productName: "Наименование продукта",
      clientVersion: "Версия приложения"
    }
  },

  /* German */
  de: {
    copyright: {
      paragraphs: [
        "Alle Produktnamen, Marken und eingetragenen Marken sind Eigentum ihrer jeweiligen Inhaber.",
        "Die Verwendung dieser Namen, Marken und Marken bedeutet keine Billigung"
      ]
    },

    synthesis: {
      productName: "Produktname",
      clientVersion: "Anwendungsversion"
    }
  }
};
