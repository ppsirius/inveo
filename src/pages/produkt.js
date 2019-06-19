import React, { useState } from "react"
import Layout from "../components/structure/layout"
import { useStaticQuery, Link as a } from "gatsby"
import { Heading, Flex, Text, Box } from "rebass"
import styled from "styled-components"
import theme from "../components/structure/theme"
import Img from "gatsby-image"
import MyButton from "../components/myButton"
import VisibilitySensor from "react-visibility-sensor"
import RecomendedProduct from "../sections/recomendedProduct"

const SectionStyled = styled(Flex)`
  height: ${props => props.height || "auto"};
  color: ${props => props.color || theme.color.white};
  background-color: ${props => props.bgColor || "transparent"};
`

const ImageHidedStyled = styled(Box)`
  height: "100%";

  @media (min-width: ${theme.breakpoints[1]}) {
    display: none;
  }
`

const ImageWrapperStyled = styled(Img)`
  display: block;

  @media (min-width: ${theme.breakpoints[0]}) {
    max-height: 60vh;
    height: 100%;
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    max-height: none;
    height: 100%;
    flex: 1 1 50%;
  }
`
const ImageWrapperStickyStyled = styled(Flex)`
  display: none;

  @media (min-width: ${theme.breakpoints[1]}) {
    display: block;
    flex: 1 1 50%;
  }
`
const ImageStickyStyled = styled(Box)`
  position: sticky;
  top: 0;
  height: 100vh;
`

const WrapperSitckyStyled = styled(Flex)``

const TextWrapperStickyStyled = styled(Box)`
  flex: 1 1 50%;
`

const FirstImageSlideStyled = styled(Img)`
  position: relative;
  z-index: 30;
  transition: all 0.5s ease-in;
  opacity: ${props => (props.inView ? 1 : 0)};
`

export default data => {
  const mockData = {
    category: "DZIAŁANIE",
    header: "Hypoalergiczne serum do rzęs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    buttonHref: "#",
  }

  const productQuery = useStaticQuery(graphql`
    query Product {
      allPrismicProduct {
        edges {
          node {
            data {
              image1 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              image2 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const product = productQuery.allPrismicProduct.edges[0].node.data

  const [firstParagraphInView, setParagraphView] = useState(true)

  return (
    <Layout>
      <WrapperSitckyStyled flexDirection={["column", "column", "row"]}>
        <ImageWrapperStickyStyled width={[1]}>
          <ImageStickyStyled>
            <FirstImageSlideStyled
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={product.image1.localFile.childImageSharp.fluid}
              inView={firstParagraphInView}
            />
            <Box
              css={{
                position: "absolute",
                height: "100vh",
                width: "100%",
                bottom: "0",
              }}
            >
              <Img
                objectFit="cover"
                objectPosition="100% 50%"
                fluid={product.image2.localFile.childImageSharp.fluid}
              />
            </Box>
          </ImageStickyStyled>
        </ImageWrapperStickyStyled>

        <TextWrapperStickyStyled>
          <SectionStyled
            flexDirection={["column", "column", "row"]}
            color={theme.color.black}
            bgColor={theme.color.almostWhite}
          >
            <VisibilitySensor
              onChange={isVisible => setParagraphView(isVisible)}
              offset={{ top: -500 }}
            >
              <Box
                css={{
                  height: "100vh",
                  paddingTop: "72px",
                }}
                width={[1]}
                order={[0, 0, 1]}
              >
                <Flex
                  flexDirection={["column", "column", "row"]}
                  justifyContent={["center"]}
                  css={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Flex
                    px={5}
                    width={[1]}
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Text
                      fontFamily="quicksand"
                      fontWeight="700"
                      fontSize={[1, 2]}
                      textAlign="center"
                      color={theme.color.blackBg}
                      mb={[3, 4]}
                      css={{
                        textTransform: "uppercase",
                      }}
                    >
                      {mockData.category}
                    </Text>

                    <Box
                      width={["90%", "80%", "80%", 550]}
                      pb={(3, 4, 5)}
                      css={{
                        margin: "0 auto",
                      }}
                    >
                      <Heading
                        textAlign="center"
                        fontFamily="frank"
                        fontSize={[7, 7]}
                        fontWeight="300"
                        lineHeight="1.2"
                      >
                        {mockData.header}
                      </Heading>
                    </Box>
                    <Flex flexDirection="column" alignItems="center">
                      <Box width={["100%", "60%", "60%", 530]}>
                        <Text
                          textAlign="center"
                          fontFamily="quicksand"
                          fontSize={[5]}
                          fontWeight="400"
                        >
                          {mockData.description}
                        </Text>
                      </Box>
                    </Flex>
                    <Flex justifyContent={["center"]} pt={3}>
                      <a
                        target="_blank"
                        href={mockData.buttonHref}
                        rel="noopener noreferrer"
                      >
                        <MyButton variant="primary">kup produkt</MyButton>
                      </a>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </VisibilitySensor>
            <ImageHidedStyled width={[1]}>
              <ImageWrapperStyled
                objectFit="cover"
                objectPosition="50% 50%"
                fluid={product.image1.localFile.childImageSharp.fluid}
              />
            </ImageHidedStyled>
          </SectionStyled>

          <SectionStyled
            flexDirection={["column", "column", "row"]}
            color={theme.color.black}
            bgColor={theme.color.almostWhite}
          >
            <Box
              css={{
                height: "100vh",
              }}
              width={[1]}
              order={[0, 0, 1]}
            >
              <Flex
                flexDirection={["column", "column", "row"]}
                justifyContent={["center"]}
                css={{
                  height: "100%",
                }}
                width={[1]}
              >
                <Flex
                  px={5}
                  width={[1]}
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Text
                    fontFamily="quicksand"
                    fontWeight="700"
                    fontSize={[1, 2]}
                    textAlign="center"
                    color={theme.color.blackBg}
                    mb={[3, 4]}
                    css={{
                      textTransform: "uppercase",
                    }}
                  >
                    {mockData.category}
                  </Text>

                  <Box
                    width={["90%", "80%", "80%", 550]}
                    pb={(3, 4, 5)}
                    css={{
                      margin: "0 auto",
                    }}
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="frank"
                      fontSize={[7, 7]}
                      fontWeight="300"
                      lineHeight="1.2"
                    >
                      {mockData.header}
                    </Heading>
                  </Box>
                  <Flex flexDirection="column" alignItems="center">
                    <Box width={["100%", "60%", "60%", 530]}>
                      <Text
                        textAlign="center"
                        fontFamily="quicksand"
                        fontSize={[5]}
                        fontWeight="400"
                      >
                        {mockData.description}
                      </Text>
                    </Box>
                  </Flex>
                  <Flex justifyContent={["center"]} pt={3}>
                    <a
                      target="_blank"
                      href={mockData.buttonHref}
                      rel="noopener noreferrer"
                    >
                      <MyButton variant="primary">kup produkt</MyButton>
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Box>

            <ImageHidedStyled width={[1]} hideOnDesktop={true}>
              <ImageWrapperStyled
                objectFit="cover"
                objectPosition="50% 50%"
                fluid={product.image2.localFile.childImageSharp.fluid}
              />
            </ImageHidedStyled>
          </SectionStyled>
        </TextWrapperStickyStyled>
      </WrapperSitckyStyled>
      <RecomendedProduct />
    </Layout>
  )
}
