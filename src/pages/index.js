import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Flex, Box } from "theme-ui"

export const query = graphql`
  {
    allSanityBook {
      nodes {
        title
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        note {
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Flex sx={{ flexWrap: "wrap" }}>
      {data.allSanityBook.nodes.map(book => (
        <Box
          key={book.title}
          m={3}
          sx={{
            // flex: 1,
            // maxWidth: "45%",
            width: 200,
          }}
        >
          <Link to={book.note.slug.current}>
            <Img fluid={book.image.asset.fluid} alt={book.title} />
          </Link>
        </Box>
      ))}
    </Flex>
  </Layout>
)

export default IndexPage
