import React from "react"
import PropTypes from "prop-types"
import { Heading, Flex, Text, Box } from "rebass"
import theme from "../components/structure/theme"
import { StyledBackgroundSection } from "./textCenterBgStyles"

const TextCenterBg = props => {
  return (
    <StyledBackgroundSection
      height="100vh"
      color={theme.color.white}
      fluid={props.bg}
    >
      <Box
        px={6}
        css={{
          height: "100%",
        }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          css={{
            height: "100%",
          }}
        >
          <Box
            width={["80%", "60%", "50%", 550]}
            pb={(3, 4, 5)}
            pt={68}
            css={{
              margin: "0 auto",
            }}
          >
            <Heading
              textAlign="center"
              fontFamily="frank"
              fontSize={[7, 8, 9]}
              fontWeight="300"
            >
              {props.header}
            </Heading>
          </Box>
          <Box
            width={["100%", "60%", "50%", 530]}
            css={{
              margin: "0 auto",
            }}
          >
            <Text
              textAlign="center"
              fontFamily="quicksand"
              fontSize={[3, 4, 5]}
              fontWeight="400"
            >
              {props.description}
            </Text>
          </Box>
        </Flex>
      </Box>
    </StyledBackgroundSection>
  )
}

TextCenterBg.propTypes = {
  bg: PropTypes.object,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default TextCenterBg
