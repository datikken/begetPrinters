const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/templates/product.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/404.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/contacts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/index.js")))
}

