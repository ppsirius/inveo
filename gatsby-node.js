const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const result = await graphql(`
  //   {
  //     allWordpressPage {
  //       edges {
  //         node {
  //           id
  //           slug
  //           title
  //           polylang_current_lang
  //         }
  //       }
  //     }
  //     allWordpressPost {
  //       edges {
  //         node {
  //           id
  //           slug
  //           polylang_current_lang
  //         }
  //       }
  //     }
  //   }
  // `)

  // // Check for any errors
  // if (result.errors) {
  //   throw new Error(result.errors)
  // }

  // // Access query results via object destructuring
  // const { allWordpressPage, allWordpressPost } = result.data

  // // Create Page pages.
  // const pageTemplate = path.resolve(`./src/templates/home.js`)

  // allWordpressPage.edges.forEach(edge => {
  //   const lang = edge.node.polylang_current_lang.toString().slice(0, 2)

  //   createPage({
  //     path: `/${lang}/${edge.node.slug}/`,
  //     component: slash(pageTemplate),
  //     context: {
  //       id: edge.node.id,
  //       slug: edge.node.slug,
  //       title: edge.node.title,
  //       lang: lang,
  //     },
  //   })
  // })

  // const postTemplate = path.resolve(`./src/templates/post.js`)
  // // We want to create a detailed page for each
  // // post node. We'll just use the WordPress Slug for the slug.
  // // The Post ID is prefixed with 'POST_'
  // allWordpressPost.edges.forEach(edge => {
  //   createPage({
  //     path: `/${edge.node.slug}/`,
  //     component: slash(postTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })




}
