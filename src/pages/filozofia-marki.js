import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/structure/layout"
import TextCenterBg from "../sections/textCenterBg"
import TextCenter from "../sections/textCenter"
import TextImage from "../sections/textImage"
import { Image, Box } from "rebass"
import theme from "../components/structure/theme"

export default data => {
  const aboutQuery = useStaticQuery(graphql`
    query About {
      allPrismicAbout {
        edges {
          node {
            data {
              section1_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              section1_title {
                text
              }
              section1_description {
                text
              }
              section2_image {
                url
              }
              section2_title {
                text
              }
              section2_description {
                text
              }
              section3_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 960, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              section3_category {
                text
              }
              section3_title {
                text
              }
              section3_description {
                text
              }
              section4_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 960, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              section4_category {
                text
              }
              section4_title {
                text
              }
              section4_description {
                text
              }
            }
          }
        }
      }
    }
  `)

  const about = aboutQuery.allPrismicAbout.edges[0].node.data

  return (
    <Layout>
      <div>
        <TextCenterBg
          bg={about.section1_image.localFile.childImageSharp.fluid}
          header={about.section1_title.text}
          description={about.section1_description.text}
        />
        <TextCenter
          header={about.section2_title.text}
          description={about.section2_description.text}
          render={() => (
            <Box
              width={[180]}
              pb={[6, 7]}
              css={{
                margin: "0 auto",
              }}
            >
              <Image src={about.section2_image.url} />
            </Box>
          )}
        />
        <TextImage
          subheader={about.section3_category.text}
          header={about.section3_title.text}
          description={about.section3_description.text}
          image={about.section3_image.localFile.childImageSharp.fluid}
          render={() => {}}
          marginedImages={true}
          bgColor={theme.color.creamBg}
        />
        <TextImage
          textAlignRight={true}
          subheader={about.section4_category.text}
          header={about.section4_title.text}
          description={about.section4_description.text}
          image={about.section4_image.localFile.childImageSharp.fluid}
          render={() => {}}
          marginedImages={true}
        />
      </div>
    </Layout>
  )
}
