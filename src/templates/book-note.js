import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Flex, Box, Heading, Text, Divider } from "theme-ui/src"

export default function BookNote({ data }) {
  const { title, excerpts } = data.sanityNote
  const captions = [...new Set(excerpts.map(e => e.caption))]
  const keynotes = new Map()
  excerpts.forEach(e => {
    const { caption } = e
    const arr = keynotes.has(caption) ? keynotes.get(caption) : []
    arr.push(e)
    keynotes.set(caption, arr)
  })

  return (
    <Layout title={title}>
      <Flex>
        <Box sx={{ width: [0, "20%"] }} bg="secondary">
          <ul>
            {captions.map(cap => (
              <li key={cap}>
                <a href={`#${cap}`}>{cap}</a>
              </li>
            ))}
          </ul>
        </Box>
        <Box p={2} sx={{ flex: 1 }}>
          {captions.map(cap => (
            <Box key={cap} id={cap} py={2}>
              <Heading>{cap} </Heading>
              {keynotes.get(cap).map(e => (
                <>
                  <Text>{e.keynote} </Text>
                  <Box sx={{ maxWidth: 600 }} pb={4}>
                    <Img fluid={e.asset.fluid} alt={e.keynote} />
                  </Box>
                </>
              ))}
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
