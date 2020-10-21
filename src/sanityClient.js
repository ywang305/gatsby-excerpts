import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: `bqazasy7`,
  dataset: `production`,
  useCdn: false,
  token:
    process?.env?.SANITY_WRITE_TOKEN ??
    "skePd3A5iyvAHv3xKZENogfwzq8VWisLjaTZbfKxHA37ny9hodisN77OQ1ZD7dw09zMBqCrZHKVNH1Jlgh3eaouONk8VxvRRIgyhlZyrksaeKY1cyy3a1M0OqADQdlv6WIn0vdIRM8P5ny45JOCfExryWRIBoHdGc5xRX6fIsZ1s6FMvI2QZ",
})
