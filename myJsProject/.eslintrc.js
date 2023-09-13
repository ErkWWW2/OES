module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.js",
          ".eslintrc.cjs"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": 2021,
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "settings": {
      "react": {
        "version": "detect" // Automatically detect the React version
      }
    },
    "rules": {
      "indent": ["error", 2],
      "quotes": ["error", "single"]
      // Add more custom rules here as needed
    }
  };
  