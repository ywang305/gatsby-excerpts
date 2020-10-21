import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import sanityClient from "../sanityClient"

/** @jsx jsx */
import { jsx, Box, Divider, Flex } from "theme-ui"

const NotesPage = ({ data }) => {
  const allNotes = data.allSanityNote.nodes

  return (
    <Layout>
      <SEO title="All Notes" description="Yao portfolio, All Notes Page" />
      {allNotes.map(note => (
        <Box
          key={note.slug.current}
          p={4}
          onClick={async () => {
            await sanityClient.patch(note._id).inc({ views: 1 }).commit()

            navigate("/" + note.slug.current)
          }}
        >
          {/* <Link to={"/" + note.slug.current} sx={{ variant: "styles.navlink" }}> */}

          {note.title}
          <Flex sx={{ cursor: "pointer" }}>
            {note.books.map(({ image }, i) => (
              <Img
                key={i}
                fluid={image.asset.fluid}
                alt="book reference"
                sx={{ width: 100, mx: 2 }}
              />
            ))}
          </Flex>
          {`views: ${note.views}`}
          {/* </Link> */}
          <Divider />
        </Box>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityNote {
      nodes {
        slug {
          current
        }
        _id
        title
        views
        books {
          image {
            asset {
              fluid(maxWidth: 100) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default NotesPage
