import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/structure/layout"
import TextCenterBg from "../sections/textCenterBg"
import TextCenter from "../sections/textCenter"
import TextImage from "../sections/textImage"
import TextCenterCategory from "../sections/textCenterCategory"
import MyButton from "../components/myButton"
import { Image, Box } from "rebass"

export default data => {
  const homepageQuery = useStaticQuery(graphql`
    query Home {
      allPrismicHomepage {
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
              section3_button_link {
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
              section4_button_link {
                text
              }
              section5_title {
                text
              }
              section5_description {
                text
              }
            }
          }
        }
      }
    }
  `)

  const home = homepageQuery.allPrismicHomepage.edges[0].node.data

  return (
    <Layout>
      <div>
        <TextCenterBg
          bg={home.section1_image.localFile.childImageSharp.fluid}
          header={home.section1_title.text}
          description={home.section1_description.text}
        />
        <TextCenter
          header={home.section2_title.text}
          description={home.section2_description.text}
          render={() => (
            <Box
              width={[180]}
              pb={[6, 7]}
              css={{
                margin: "0 auto",
              }}
            >
              <Image src={home.section2_image.url} />
            </Box>
          )}
        />
        <TextImage
          subheader={home.section3_category.text}
          header={home.section3_title.text}
          description={home.section3_description.text}
          image={home.section3_image.localFile.childImageSharp.fluid}
          render={() => (
            <Link to={home.section3_button_link.text}>
              <MyButton variant="primary">zobacz produkt</MyButton>
            </Link>
          )}
        />
        <TextImage
          textAlignRight={true}
          subheader={home.section4_category.text}
          header={home.section4_title.text}
          description={home.section4_description.text}
          image={home.section4_image.localFile.childImageSharp.fluid}
          render={() => (
            <Link to={home.section4_button_link.text}>
              <MyButton variant="primary">zobacz produkt</MyButton>
            </Link>
          )}
        />
        <TextCenterCategory
          header={home.section5_title.text}
          description={home.section5_description.text}
        />
      </div>
    </Layout>
  )
}
