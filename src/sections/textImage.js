import React from "react"
import PropTypes from "prop-types"
import { Heading, Flex, Text, Box } from "rebass"
import theme from "../components/structure/theme"
import { SectionStyled, ImageWrapperStyled } from "./textImageStyles"

const paddingGenerator = textAlignRight => {
  return textAlignRight ? "15%" : 0
}

const TextImage = props => (
  <SectionStyled color={theme.color.black} bgColor={props.bgColor}>
    <Box
      css={{
        height: "100%",
      }}
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent="center"
        pb={[7, 7, 0]}
        css={{
          height: "100%",
        }}
      >
        <Flex
          justifyContent={["center", "center", "start"]}
          alignItems={["flex-start", "flex-start", "center"]}
          width={[1, 1, 1 / 2]}
          order={[0, 0, props.textAlignRight ? 0 : 1]}
          py={[0, 0, props.marginedImages ? 100 : 0]}
          pr={[0, 0, props.marginedImages ? paddingGenerator(!props.textAlignRight) : 0]}
          pl={[0, 0, props.marginedImages ? paddingGenerator(props.textAlignRight) : 0]}
        >
          <Box
            width={[1, 1, 1, "100%"]}
            css={{
              height: "100%",
            }}
          >
            <ImageWrapperStyled
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={props.image}
            />
          </Box>
        </Flex>

        <Flex
          px={6}
          pt={[5, 6, 0]}
          width={[1, 1, 1 / 2]}
          flexDirection="column"
          justifyContent="center"
        >
          <Text
            fontFamily="quicksand"
            fontWeight="700"
            fontSize={[0, 1, 2]}
            textAlign="center"
            color={theme.color.lighterGray}
            mt={2}
            mb={[3, 4]}
            css={{
              textTransform: "uppercase",
            }}
          >
            {props.subheader}
          </Text>

          <Box
            width={["80%", "70%", "70%", 550]}
            pb={(3, 4, 5)}
            css={{
              margin: "0 auto",
            }}
          >
            <Heading
              textAlign="center"
              fontFamily="frank"
              fontSize={[6, 7, 6, 7]}
              px={["15%"]}
              fontWeight="300"
            >
              {props.header}
            </Heading>
          </Box>
          <Flex flexDirection="column" alignItems="center">
            <Box width={["100%", "60%", "60%", 530]} pb={[4]}>
              <Text
                textAlign="center"
                fontFamily="quicksand"
                fontSize={[3, 4, 4, 5]}
                fontWeight="400"
              >
                {props.description}
              </Text>
            </Box>
            {props.render()}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </SectionStyled>
)

TextImage.propTypes = {
  textAlignRight: PropTypes.bool,
  subheader: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  marginedImages: PropTypes.bool,
  bgColor: PropTypes.string,
}

TextImage.defaultProps = {
  textAlignRight: false,
  marginedImages: false,
  bgColor: theme.color.lightGray,
}

export default TextImage
