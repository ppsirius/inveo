import React from "react"
import PropTypes from "prop-types"
import { Heading, Flex, Text, Box, Image } from "rebass"
import theme from "../components/structure/theme"
import pielegnacja_brwi from "../images/pielegnacja_brwi.svg"
import pielegnacja_rzes from "../images/pielegnacja_rzes.svg"
import pielegnacja_oczu from "../images/pielegnacja_oczu.svg"
import pod_oczami from "../images/pod_oczami.svg"
import { SectionStyled } from "./textCenterStyles"

const TextCenterCategory = props => (
  <SectionStyled color={theme.color.black}>
    <Box px={6} py={[8, 9]}>
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
        <Flex
          flexDirection={["column", "row"]}
          justifyContent={["start", "space-around", "space-between"]}
          alignItems={["center", "flex-end"]}
          flexWrap={["nowrap", "wrap", "nowrap"]}
          pt={[6, 7]}
          pb={[6, 0]}
          width={[1, 1, 800, 1200]}
          css={{
            margin: "0 auto",
          }}
        >
          <Flex
            flexDirection="column"
            alignItems={["center"]}
            my={[4]}
            width={[1, "40%", "23%"]}
          >
            <Image src={pielegnacja_brwi} width={[170]} my={[5]} />
            <Text
              fontWeight="700"
              fontSize={2}
              fontFamily={theme.fonts.quicksand}
            >
              PIELĘGNACJA BRWI
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={["center"]}
            my={[4]}
            width={[1, "40%", "23%"]}
          >
            <Image src={pielegnacja_rzes} width={[170]} my={[5]} />
            <Text
              fontWeight="700"
              fontSize={2}
              fontFamily={theme.fonts.quicksand}
            >
              PIELĘGNACJA RZĘS
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={["center"]}
            my={[4]}
            width={[1, "40%", "23%"]}
          >
            <Image src={pielegnacja_oczu} width={[170]} my={[5]} />
            <Text
              fontWeight="700"
              fontSize={2}
              fontFamily={theme.fonts.quicksand}
            >
              PIELĘGNACJA OCZU
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={["center"]}
            my={[4]}
            width={[1, "40%", "23%"]}
          >
            <Image src={pod_oczami} width={[170]} my={[5]} />
            <Text
              fontWeight="700"
              fontSize={2}
              fontFamily={theme.fonts.quicksand}
            >
              PIELĘGNACJA SKÓRY POD OCZAMI
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </SectionStyled>
)

TextCenterCategory.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
}

export default TextCenterCategory
