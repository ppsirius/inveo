import React from "react"
import PropTypes from "prop-types"
import { Heading, Flex, Text, Box } from "rebass"
import theme from "../components/structure/theme"
import { SectionStyled } from "./textCenterStyles"

const TextCenter = props => (
  <SectionStyled color={theme.color.black}>
    <Box px={6} py={[8, 9]}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        css={{
          height: "100%",
        }}
      >
        {props.render()}

        <Box
          width={["80%", "60%", "50%", 550]}
          pb={(3, 4, 5)}
          css={{
            margin: "0 auto",
          }}
        >
          <Heading
            textAlign="center"
            fontFamily="frank"
            fontSize={[6, 7]}
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
  </SectionStyled>
)

TextCenter.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
}

export default TextCenter