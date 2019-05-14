// Dynamically creates pages

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get Path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const wpTemplate = path.resolve("./src/templates/wordpressBlog.js")

  // Get contentful data
  const contentfulResponse = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Create new Contentful pages
  contentfulResponse.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // Wordpress Data

  const wordPressResponse = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const edges = wordPressResponse.data.allWordpressPost.edges

  console.log(edges)

  edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: wpTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
