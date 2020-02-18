const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/templates/product.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/blog.js"))),
  "component---src-pages-catalog-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/catalog.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/contacts.js"))),
  "component---src-pages-hits-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/hits.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/index.js"))),
  "component---src-pages-information-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/information.js"))),
  "component---src-pages-sales-js": hot(preferDefault(require("/Users/tikken/Sites/printers/site/src/pages/sales.js")))
}

