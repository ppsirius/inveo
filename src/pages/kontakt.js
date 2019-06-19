import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Heading, Flex, Box } from "rebass"
import styled from "styled-components"
import theme from "../components/structure/theme"
import Layout from "../components/structure/layout"
import TextCenterBg from "../sections/textCenterBg"
import ContactMap from "../components/map"

export default data => {
  const contactQuery = useStaticQuery(graphql`
    query Contact {
      allPrismicContact {
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

  const contact = contactQuery.allPrismicContact.edges[0].node.data

  const SectionStyled = styled("section")`
    padding: 0 ${theme.space[4]}px;
    font-size: ${theme.fontSizes[4]}px;

    a {
      text-decoration: none;
      color: ${theme.color.blackBg};
    }
  `

  return (
    <Layout>
      <div>
        <TextCenterBg
          bg={contact.section1_image.localFile.childImageSharp.fluid}
          header={contact.section1_title.text}
          description={contact.section1_description.text}
        />
        <SectionStyled>
          <Flex
            flexDirection={["column"]}
            pb={[8]}
            width={[1, 800, 800, 1000]}
            css={{ margin: "0 auto" }}
          >
            <Box mt={9} mb={[7]}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </Box>
            <Flex
              flexDirection={["column", "row", "row"]}
              justifyContent={[null, "space-between"]}
            >
              <Box mb={7} width={[1, "33,3"]}>
                <Heading fontFamily="frank" fontSize={[7]} fontWeight="300">
                  Adres
                </Heading>
                <p>
                  INVEO Cosmetics
                  <br />
                  Mościska
                  <br />
                  ul. Estrady
                  <br />
                  11A 05-080 Izabelin, Polska
                </p>
              </Box>
              <Box mb={7} width={[1, "33,3"]}>
                <Heading fontFamily="frank" fontSize={[7]} fontWeight="300">
                  Telefon
                </Heading>
                <p>
                  <a href="tel:048227510031">+48 22 751 00 31</a>
                </p>
              </Box>
              <Box mb={7} width={[1, "33,3"]}>
                <Heading fontFamily="frank" fontSize={[7]} fontWeight="300">
                  E-mail
                </Heading>
                <p>
                  <a href="mailto:kontakt@lauraconti.biz">
                    kontakt@lauraconti.biz
                  </a>
                </p>
              </Box>
            </Flex>
          </Flex>
        </SectionStyled>

        <Box bg={theme.color.creamBg} css={{ height: "50vh" }}>
          <ContactMap />
        </Box>
      </div>
    </Layout>
  )
}
