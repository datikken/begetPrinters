/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/post.js`)

  return graphql(`
          {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(result)

    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: productTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery", // important: 'Q' capitalized
    },
  })
}