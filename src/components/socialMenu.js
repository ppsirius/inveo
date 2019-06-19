import React from "react"
import { StaticQuery, graphql } from "gatsby"
import theme from "./structure/theme"
import { connect } from "react-redux"
import { Flex, Box, Image, Text } from "rebass"
import close from "../images/close.svg"
import { actions } from "../state/app"
import { MenuStyled, MenuListElementStyled, StyledLogo } from "./socialMenuStyles"

const SocialMenu = props => {
  const menuLinks = props.data.allPrismicSocialMedia.edges[0].node.data.links
  const menuLinksComponent = menuLinks.map(e => (
    <Box width={1} key={e.title.text}>
      <MenuListElementStyled
        pt={[2, 3]}
        onClick={() => {
          props.toggleMenu()
        }}
        href={e.link.text}
        target="_blank"
      >
        {e.title.text}
      </MenuListElementStyled>
    </Box>
  ))

  return (
    <MenuStyled socialMenuActive={props.socialMenuActive}>
      <Flex
        flexDirection="column"
        css={{
          height: "100%",
        }}
      >
        <Flex p={6}>
          <Box width={[1 / 4]} />
          <Flex justifyContent={"center"} width={[1]}>
            <div>
              <StyledLogo />
            </div>
          </Flex>
          <Flex justifyContent={"flex-end"} width={[1 / 4]}>
            <Image width={[22]} src={close} onClick={() => props.toggleMenu()} />
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          css={{
            height: "25%",
          }}
        >
          <Text
            fontSize={[2]}
            fontWeight="700"
            fontFamily={theme.fonts.quicksand}
            color={theme.color.black}
            letterSpacing="3px"
          >
            ODWIEDŹ NAS
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          pt={9}
          css={{
            height: "75%",
          }}
        >
          {menuLinksComponent}
        </Flex>

        <Text
          fontSize={[1]}
          color={theme.color.black}
          textAlign="center"
          fontFamily={theme.fonts.quicksand}
          p={5}
        >
          Copyright © INVEO 2019
        </Text>
      </Flex>
    </MenuStyled>
  )
}

const mapStateToProps = state => {
  return {
    socialMenuActive: state.reducer.socialMenuActive,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch({ type: actions.TOGGLE_SOCIAL_MENU }),
  }
}

const ConnectedSocialMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialMenu)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicSocialMedia {
          edges {
            node {
              data {
                social_menu_title {
                  text
                }
                links {
                  title {
                    text
                  }
                  link {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ConnectedSocialMenu data={data} {...props} />}
  />
)
