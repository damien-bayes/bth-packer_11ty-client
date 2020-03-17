module.exports = {
    root: true,

    parserOptions: {
      "parser": "babel-eslint"
    },

    env: {
      "es6": true,
      "node": true,
      "browser": true
    },
    
    /* Add your rules here */
    rules: {
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "semi": [
        1, 
        "always"
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "indent": [
        "error",
        2
      ],
      "quotes": [
        2, 
        "double", 
        { avoidEscape: true }
      ],
      "no-trailing-spaces": [
        2, 
        { skipBlankLines: true }
      ],
      "no-tabs": [
        "error", 
        { allowIndentationTabs: true }
      ]
    }
  };