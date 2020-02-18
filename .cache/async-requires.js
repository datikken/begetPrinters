// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-product-js": () => import("./../src/templates/product.js" /* webpackChunkName: "component---src-templates-product-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contacts-js": () => import("./../src/pages/contacts.js" /* webpackChunkName: "component---src-pages-contacts-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-information-js": () => import("./../src/pages/information.js" /* webpackChunkName: "component---src-pages-information-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-hits-js": () => import("./../src/pages/hits.js" /* webpackChunkName: "component---src-pages-hits-js" */),
  "component---src-pages-catalog-js": () => import("./../src/pages/catalog.js" /* webpackChunkName: "component---src-pages-catalog-js" */),
  "component---src-pages-sales-js": () => import("./../src/pages/sales.js" /* webpackChunkName: "component---src-pages-sales-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */)
}

