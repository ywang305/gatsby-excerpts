/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allSanityBook {
        nodes {
          note {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const template = path.resolve(`./src/templates/book-note.js`)

  const sanityBooks = result.data.allSanityBook.nodes
  sanityBooks.forEach(book => {
    if (book.note.slug) {
      const { current: note_slug } = book.note.slug
      actions.createPage({
        path: note_slug,
        component: template,
        context: {
          slug: note_slug,
        },
      })
    }
  })
}
