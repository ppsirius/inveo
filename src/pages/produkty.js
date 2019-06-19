import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/structure/layout"
import TextCenterBg from "../sections/textCenterBg"

export default data => {
  const productsQuery = useStaticQuery(graphql`
    query Products {
      allPrismicProducts {
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
            }
          }
        }
      }
    }
  `)

  const products = productsQuery.allPrismicProducts.edges[0].node.data

  return (
    <Layout>
      <div>
        <TextCenterBg
          bg={products.section1_image.localFile.childImageSharp.fluid}
          header={products.section1_title.text}
          description={products.section1_description.text}
        />
      </div>
    </Layout>
  )
}
