import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Flex, Box, Heading, Text, Divider } from "theme-ui/src"

export default function BookNote({ data }) {
  const { title, excerpts } = data.sanityNote
  return (
    <Layout title={title}>
      <Flex>
        <Box sx={{ width: [0, "20%"], overflowX: "hidden" }} bg="tomato">
          <ul>
            {excerpts.map(e => (
              <a href={`#${e.caption}`}>
                <li key={e.caption}>{e.caption}</li>
              </a>
            ))}
          </ul>
        </Box>
        <Box p={2} sx={{ flex: 1 }}>
          {excerpts.map(e => (
            <Box key={e.caption} id={e.caption} py={2}>
              <Heading>{e.caption} </Heading>
              <Text>{e.keynote} </Text>
              <Box>
                <Img fluid={e.asset.fluid} alt={e.caption} />
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityNote(slug: { current: { eq: $slug } }) {
      title
      excerpts {
        caption
        keynote
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
