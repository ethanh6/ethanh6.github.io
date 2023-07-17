module.exports = {
  settings: {
    "import/ignore": ["contentLayerAdapter.js"],
  },
  parser: "@babel/eslint-parser",
  requireConfigFile: false,
  ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  sourceType: 'module' // Allows for the use of imports
};
